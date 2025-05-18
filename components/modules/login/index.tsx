"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/custom/Input";
import { RectangleButton } from "@/components/custom/RectangleButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef } from "react";
import AuthService from "@/services/auth.service";

const FormSchema = z.object({
  username: z.string().min(4, {
    message: "Username must be at least 4 characters.",
  }),
  password: z
    .string()
    .min(4, { message: "Must have at least 4 characters" }),
  recaptchaToken: z.string().min(1, { message: "Please complete the CAPTCHA" }),
});

export default function Login({ className }: { className?: string }) {
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
      recaptchaToken: "",
    },
  });

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaValue(token);
    form.setValue("recaptchaToken", token || "");
  };
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setIsLoading(true);
      await AuthService.login({
        username: data.username,
        password: data.password,
        recaptchaToken: data.recaptchaToken
      });

    } catch (error) {
      // Handle login errors
      console.error("Login error:", error);
      toast.error("Login failed", { 
        description: error instanceof Error ? error.message : "Please check your credentials and try again"
      });
    } finally {
      setIsLoading(false);
      
      // Reset recaptcha regardless of outcome
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setRecaptchaValue(null);
      form.setValue("recaptchaToken", "");
    }
  }

  return (
    <section
      className={cn(
        "w-[424px] bg-white rounded-[4px] border border-gray-100",
        className
      )}
    >
      <div className="p-[32px] flex flex-col text-gray-900 w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <div className="body-XL-600">Sign in to your account</div>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} className="h-[44px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <Link
                      href={"/forget-password"}
                      className="body-S-500 text-secondary-500"
                    >
                      Forget Password
                    </Link>
                  </div>
                  <FormControl>
                    <Input
                      placeholder=""
                      {...field}
                      className="h-[44px]"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="recaptchaToken"
              render={() => (
                <FormItem>                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''} // Fallback to test key if env not available
                      onChange={handleRecaptchaChange}
                    />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />            <RectangleButton
              type="submit"
              variant={"primary"}
              className="w-full flex items-center justify-center h-12"
              disabled={!recaptchaValue || isLoading}
            >
              <span className="heading-5">{isLoading ? "Logging in..." : "Login"}</span>
              {!isLoading && <ArrowRight weight="bold" size={20} />}
            </RectangleButton>

            <div className="">
              <div className="flex items-center justify-center gap-2">
                <hr className="flex-1 text-gray-100" />
                <span className="body-S-400">Don’t have account</span>
                <hr className="flex-1 text-gray-100" />
              </div>
            </div>            <RectangleButton
              variant={"tertiary"}
              className="w-full flex items-center justify-center h-12"
              onClick={() => router.push('/register')}
            >
              <span className="body-S-400">Create account</span>
            </RectangleButton>
          </form>
        </Form>
      </div>
    </section>
  );
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { z } from "zod";

import { cn } from "@/lib/utils";
import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
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

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z
    .string()
    .min(1, { message: "Must have at least 1 character" })
    .regex(passwordValidation, {
      message: "Your password is not valid",
    }),
});

export default function Login({ className }: { className?: string }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
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
            <RectangleButton
              type="submit"
              variant={"primary"}
              className="w-full flex items-center justify-center h-12"
            >
              <span className="heading-5">Login</span>
              <ArrowRight weight="bold" size={20} />
            </RectangleButton>

            <div className="">
              <div className="flex items-center justify-center gap-2">
                <hr className="flex-1 text-gray-100" />
                <span className="body-S-400">Don’t have account</span>
                <hr className="flex-1 text-gray-100" />
              </div>
            </div>

            <RectangleButton
              variant={"tertiary"}
              className="w-full flex items-center justify-center h-12"
            >
              <span className="body-S-400">Create account</span>
            </RectangleButton>
          </form>
        </Form>
      </div>
    </section>
  );
}

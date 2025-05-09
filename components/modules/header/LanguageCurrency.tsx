"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function LanguageCurrency({
  className,
}: {
  className?: string;
}) {
  const switchLocale = (val: string) => {
    // TODO: change locale
    console.log(val)
  };
  const switchCurrency = (val: string) => {
    // TODO: change currency
    console.log(val)
  };
  return (
    <div className={cn(className,"flex items-center")}>
      <Select
        onValueChange={(value) => switchLocale(value)}
        defaultValue={"en"}
      >
        <SelectTrigger
          className={cn(
            className,
            "focus:ring-0 focus:ring-offset-0  focus:outline-none border-none outline-none focus:border-none shadow-none hover:shadow-none"
          )}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="en">
              <div className="flex items-center justify-center gap-4 capitalize">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/330/330425.png"
                  alt="flag"
                  width={20}
                  height={20}
                />
                en
              </div>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        onValueChange={(value) => switchCurrency(value)}
        defaultValue={"USD"}
      >
        <SelectTrigger
          className={cn(
            className,
            "focus:ring-0 focus:ring-offset-0  focus:outline-none border-none outline-none focus:border-none shadow-none hover:shadow-none"
          )}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="USD">
              USD
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

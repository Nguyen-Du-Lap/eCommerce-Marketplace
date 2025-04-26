"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { FacebookLogo, InstagramLogo, PinterestLogo, RedditLogo, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";
import Link from "next/link";

export default function SocialIcons({ className }: { className?: string }) {
  return <div className={cn(className,  "flex flex-row items-center gap-2")}>
    <span className="font-b">Follow us:</span>
    <div className="flex flex-row gap-2">
        <Link href={"/"}>
          <TwitterLogo fontSize={16} weight="fill"/>
        </Link>
        <Link href={"/"}>
          <FacebookLogo fontSize={16} weight="fill" />
        </Link>
        <Link href={"/"}>
          <PinterestLogo fontSize={16} weight="fill" />
        </Link>
        <Link href={"/"}>
          <RedditLogo fontSize={16} weight="fill" />
        </Link>
        <Link href={"/"}>
          <YoutubeLogo fontSize={16} weight="fill" />
        </Link>
        <Link href={"/"}>
          <InstagramLogo fontSize={16} weight="fill" />
        </Link>
      </div>
  </div>;
}

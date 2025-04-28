import { cn } from "@/lib/utils";
import React from "react";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("container xl:px-[150px] mx-auto h-full w-full", className)}>{children}</div>;
}

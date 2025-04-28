"use client";

import React from "react";
import FramerMotionProvider from "./framer-motion-provider";

export default function Providers({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <FramerMotionProvider>{children}</FramerMotionProvider>;
}

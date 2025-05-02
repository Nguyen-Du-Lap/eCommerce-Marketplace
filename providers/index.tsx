"use client";

import React from "react";
import FramerMotionProvider from "./framer-motion-provider";
import StateProvider from "./state-provider";

export default function Providers({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <StateProvider>
      <FramerMotionProvider>{children}</FramerMotionProvider>
    </StateProvider>
  );
}

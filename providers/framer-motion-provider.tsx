"use client";

import { domAnimation, LazyMotion } from "framer-motion";
import React from "react";

export default function FramerMotionProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <LazyMotion strict features={domAnimation}>
      {children}
    </LazyMotion>
  );
}

"use client";

import React from "react";
import FramerMotionProvider from "./framer-motion-provider";
import StateProvider from "./state-provider";
import { Toaster } from "sonner";
import CustomQueryClientProvider from "./query-client-provider";

export default function Providers({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <StateProvider>
      <CustomQueryClientProvider>
        <FramerMotionProvider>
            <Toaster position="top-center" richColors /> {children}
        </FramerMotionProvider>
      </CustomQueryClientProvider>
    </StateProvider>
  );
}

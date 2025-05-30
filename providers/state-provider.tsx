"use client";

import { store } from "@/store";
import React from "react";
import { Provider } from "react-redux";

interface ReduxProviderProps {
  children: React.ReactNode;
}

export default function StateProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}

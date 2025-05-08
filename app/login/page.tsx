"use client";

import Container from "@/components/custom/Container";
import Login from "@/components/modules/login";
import React from "react";

export default function Page() {
  return (
    <section className="h-screen">
      <Container>
        {/* wrap */}
        <div className="flex items-center justify-center h-full">
          <Login />
        </div>
      </Container>
    </section>
  );
}

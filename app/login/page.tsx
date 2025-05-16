"use client";

import Container from "@/components/custom/Container";
import Login from "@/components/modules/login";
import CustomBreadcrumb from "@/components/custom/CustomBreadcrumb";
import React from "react";

export default function Page() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Login", isCurrent: true },
  ];

  return (
    <section className="h-screen">
      <CustomBreadcrumb items={breadcrumbItems} />
      <Container>
        {/* wrap */}
        <div className="flex items-center justify-center h-[calc(100vh-200px)]">
          <Login />
        </div>
      </Container>
    </section>
  );
}

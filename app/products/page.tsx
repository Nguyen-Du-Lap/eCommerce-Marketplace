"use client";

import React from "react";
import Container from "@/components/custom/Container";
import CustomBreadcrumb from "@/components/custom/CustomBreadcrumb";

export default function ProductsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", isCurrent: true },
  ];

  return (
    <section>
      <CustomBreadcrumb items={breadcrumbItems} />
      <Container>
        <h1 className="text-2xl font-bold mb-8">All Products</h1>

        {/* Products list will go here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* You can add product cards here once the data is available */}
        </div>
      </Container>
    </section>
  );
}

"use client";

import ProductDetail from "@/components/modules/product-detail";
import React from "react";
import CustomBreadcrumb from "@/components/custom/CustomBreadcrumb";

export default function Page({ params }: { params: { id: string } }) {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Product Details", isCurrent: true },
  ];
  console.log(params);
  return (
    <>
      <CustomBreadcrumb items={breadcrumbItems} />
      <ProductDetail />
    </>
  );
}

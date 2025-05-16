"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Container from "./Container";

type BreadcrumbItem = {
  label: string;
  href?: string;
  isCurrent?: boolean;
};

interface CustomBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function CustomBreadcrumb({
  items,
  className = "",
}: CustomBreadcrumbProps) {
  return (
    <div className="bg-gray-50">
      <Container>
        <Breadcrumb className={cn("h-[72px] flex items-center", className)}>
          <BreadcrumbList>
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {item.isCurrent ? (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={item.href || "#"}>{item.label}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < items.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </Container>
    </div>
  );
}

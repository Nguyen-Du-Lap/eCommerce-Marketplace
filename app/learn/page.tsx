"use client";

import Container from "@/components/custom/Container";
import Link from "next/link";
import React, {  } from "react";

export default function Learn() {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4">Learn</h1>
      <ul>
        <li>
          <Link href="/learn/custom-storage" className="text-blue-500 hover:underline">Custom Storage</Link>
        </li>
        <li>
          <Link href="/learn/react-hook-form" className="text-blue-500 hover:underline">React Hook Form</Link>
          <ul className="ml-4">
            <li>
              <Link href="/learn/react-hook-form/zod" className="text-blue-500 hover:underline">Zod</Link>
            </li>
            <li>
              <Link href="/learn/react-hook-form/yup" className="text-blue-500 hover:underline">Yup</Link>
            </li>
            <li>
              <Link href="/learn/react-hook-form/mui" className="text-blue-500 hover:underline">MUI</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/learn/react-query" className="text-blue-500 hover:underline">React Query</Link>
        </li>
      </ul>

    </Container>
  );
}

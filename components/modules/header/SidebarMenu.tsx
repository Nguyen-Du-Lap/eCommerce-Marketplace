"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function SidebarMenu({ className }: { className?: string }) {
    const [show, setShow] = useState(false);
  return (
    <div className={cn(className)}>
      <Sheet>
        <SheetTrigger>
          <MenuIcon size={32} className="text-white" />
        </SheetTrigger>
        <SheetContent>
          <Tabs className="p-4">
            <TabsList>
              <TabsTrigger value="category">Categories</TabsTrigger>
              <TabsTrigger value="pages">Pages</TabsTrigger>
            </TabsList>
            <TabsContent value="category">
              <div className="flex items-center justify-between">
                <span className="capitalize hover:text-primary-500 cursor-pointer">category name</span>
                <CaretRight size={14} className="h-5 w-5" onClick={() => setShow(!show)}/>
              </div>
            </TabsContent>
            <TabsContent value="pages">
              {/* Category content goes here */}
              <div className="flex items-center justify-between">
                <span className="capitalize hover:text-primary-500 cursor-pointer">pages</span>
              </div>
            </TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>

      <Sheet open={show}>
        <SheetTrigger></SheetTrigger>
        <SheetContent>
            <div className="p-4">
                <Button variant="outline" onClick={() => setShow(!show)}>
                    <CaretLeft size={14} className="h-5 w-5"/>
                </Button>
                <div>
                    <Link href={"/"}>sub category</Link>
                </div>
            </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

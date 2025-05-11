"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Truck } from "lucide-react";
import { Handshake, Headphones, Medal } from "@phosphor-icons/react";
import ProductReviews from "./ProductReviews";

export default function Info({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <div className={cn("w-full", className)}>
      <Tabs
        defaultValue="description"
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="w-full h-auto flex-wrap">
          <TabsTrigger
            value="description"
            className={`${
              activeTab === "description"
                ? "border-b-2 border-primary rounded-none"
                : "border-b-2 border-transparent"
            } py-2`}
          >
            DESCRIPTION
          </TabsTrigger>
          <TabsTrigger
            value="additional"
            className={`${
              activeTab === "additional"
                ? "border-b-2 border-primary rounded-none"
                : "border-b-2 border-transparent"
            } py-2`}
          >
            ADDITIONAL INFORMATION
          </TabsTrigger>
          <TabsTrigger
            value="specification"
            className={`${
              activeTab === "specification"
                ? "border-b-2 border-primary rounded-none"
                : "border-b-2 border-transparent"
            } py-2`}
          >
            SPECIFICATION
          </TabsTrigger>
          <TabsTrigger
            value="review"
            className={`${
              activeTab === "review"
                ? "border-b-2 border-primary rounded-none"
                : "border-b-2 border-transparent"
            } py-2`}
          >
            REVIEW
          </TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="p-10 border border-gray-100 rounded-[4px]">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="col-span-6 flex flex-col gap-3">
              <h2 className="body-M-600 text-gray-900">Description</h2>
              <div className="space-y-4 text-sm">
                <p className="body-S-400 text-gray-600">
                  The most powerful MacBook Pro ever is here. With the
                  blazing-fast M1 Pro or M1 Max chip — the first Apple silicon
                  designed for pros — you get groundbreaking performance and
                  amazing battery life. Add to that a stunning Liquid Retina XDR
                  display, the best camera and audio ever in a Mac notebook, and
                  all the ports you need. The first notebook of its kind, this
                  MacBook Pro is a beast. M1 Pro takes the exceptional
                  performance of the M1 architecture to a whole new level for
                  pro users.
                </p>
                <p className="body-S-400 text-gray-600">
                  Even the most demanding tasks are easily handled with up to 10
                  CPU cores, up to 16 GPU cores, a 16-core Neural Engine, and
                  dedicated encode and decode media engines that support H.264,
                  HEVC, and ProRes codecs.
                </p>
              </div>
            </div>

            <div className="col-span-6 sm:col-span-3 gap-3 flex flex-col">
              <h2 className="body-M-600 text-gray-900">Feature</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Medal size={24} className="mt-0.5 text-primary-500" />
                  <div>
                    <p className="body-S-400 text-gray-900">Free 1 Year Warranty</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Truck size={24} className="mt-0.5 text-primary-500" />
                  <div>
                    <p className="body-S-400 text-gray-900">
                      Free Shipping & Parcel Delivery
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Handshake size={24} className="mt-0.5 text-primary-500"  />
                  <div>
                    <p className="body-S-400 text-gray-900">100% Money-back guarantee</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Headphones size={24} className="mt-0.5 text-primary-500" />
                  <div>
                    <p className="body-S-400 text-gray-900">24/7 Customer support</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CreditCard size={24} className="mt-0.5 text-primary-500" />
                  <div>
                    <p className="body-S-400 text-gray-900">Secure payment method</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3 gap-3 flex flex-col">
              <h2 className="body-M-600 text-gray-900">
                Shipping Information
              </h2>
              <div className="text-sm">
                <div className="body-S-500 text-gray-900">
                  <span className="font-medium">Courier:</span>{" "}
                  <span className="body-S-400 text-gray-600">2-4 days, free shipping</span>
                </div>

                <div className="body-S-500 text-gray-900">
                  <span className="font-medium">Local Shipping:</span>{" "}
                  <span className="body-S-400 text-gray-600">up to one week, $19.00</span>
                </div>

                <div className="body-S-500 text-gray-900">
                  <span className="font-medium">UPS Ground Shipping:</span>{" "}
                  <span className="body-S-400 text-gray-600">4-6 days, $29.00</span>
                </div>

                <div className="body-S-500 text-gray-900">
                  <span className="font-medium">Unishop Global Export:</span>{" "}
                  <span className="body-S-400 text-gray-600">3-4 days, $39.00</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="additional" className="p-10 border border-gray-100 rounded-[4px]">
            <span className="body-L-500 text-gray-900">BEASTCOM Q3 | Full Gamer PC | AMD Ryzen 7 8X 4.60GHz 16 Threads | 16GB RAM | 1TB SSD | 4K Vega Graphics | 24  LED Display + Keyboard + Mouse + Mouse Pad | HDMI | WiFi | Windows 11 Pro</span>
        </TabsContent>

        <TabsContent value="specification" className="p-10 border border-gray-100 rounded-[4px]">
            <ul className="flex flex-col gap-4">
              <li className="body-L-500 text-gray-900">Brand Name : BEASTCOM</li>
              <li className="body-L-500 text-gray-900">Operating System : Windows 11 Pro</li>
              <li className="body-L-500 text-gray-900">CPU Model : Ryzen 7CPU</li>
              <li className="body-L-500 text-gray-900">Speed : 4.6 GHz</li>
            </ul>
        </TabsContent>

        <TabsContent value="review" className="p-10 border border-gray-100 rounded-[4px]">
          <ProductReviews />
        </TabsContent>
      </Tabs>
    </div>
  );
}

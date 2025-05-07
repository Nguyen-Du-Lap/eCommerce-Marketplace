"use client";

import Container from "@/components/custom/Container";
import { AppleLogo, ArrowRight, GooglePlayLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section className="bg-gray-900">
      <Container>
        <div className="flex flex-col text-white py-[72px]">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[24px]">
            {/* Contact */}
            <ul className="flex flex-col gap-3">
              <li className="mb-3">
                <Image
                  src="/images/logo_footer.svg"
                  width={160}
                  height={48}
                  alt="logo"
                />
              </li>
              <li className="flex flex-col gap-1">
                <span className="body-S-400 text-gray-500">
                  Customer Supports:
                </span>
                <span className="body-L-500 text-gray-00">(629) 555-0129</span>
              </li>
              <li>
                <span className="body-M-400 text-gray-300">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </span>
              </li>
              <li>
                <span className="body-M-500 text-gray-00">info@kinbo.com</span>
              </li>
            </ul>
            {/* Top Category */}
            <div className="flex flex-col gap-3">
              <h3 className="uppercase label-2 text-gray-00">Top Category</h3>
              <ul className="flex flex-col gap-2">
                <li className="body-S-500 text-gray-400">
                  <Link href={"/"}>Computer & Laptop</Link>
                </li>
                <li className="body-S-500 text-gray-400">
                  <Link href={"/"}>SmartPhone</Link>
                </li>
                <li className="body-S-500 text-gray-400">
                  <Link href={"/"}>Headphone</Link>
                </li>
                <li className="body-S-500 text-gray-00 relative">
                  <Link
                    href={"/"}
                    className="before:absolute before:w-[24px] before:h-1 before:top-2 before:left-0 before:bg-warning-500 before:rounded-md  ml-[32px]"
                  >
                    Accessories
                  </Link>
                </li>
                <li className="body-S-500 text-gray-400">
                  <Link href={"/"}>Camera & Photo</Link>
                </li>
                <li className="body-S-500 text-gray-400">
                  <Link href={"/"}>TV & Homes</Link>
                </li>
                <li className="body-S-500 text-warning-500">
                  <Link
                    href={"/"}
                    className=" flex flex-row items-center gap-2"
                  >
                    <p>Browse All Product</p> <ArrowRight size={20} />
                  </Link>
                </li>
              </ul>
            </div>
            {/* Quick links */}
            <div className="flex flex-col gap-3">
              <h3 className="uppercase label-2 text-gray-00">Quick links</h3>
              <ul className="flex flex-col gap-2">
                <li className="body-S-500 text-gray-400">
                  <Link href={"/"}>Shop Product</Link>
                </li>
                <li className="body-S-500 text-gray-400">
                  <Link href={"/"}>Shoping Cart</Link>
                </li>
                <li className="body-S-500 text-gray-400">
                  <Link href={"/"}>Wishlist</Link>
                </li>
                <li className="body-S-500 text-gray-400">
                  <Link href={"/"}>Compare</Link>
                </li>
                <li className="body-S-500 text-gray-400">
                  <Link href={"/"}>Track Order</Link>
                </li>
                <li className="body-S-500 text-gray-400">
                  <Link href={"/"}>Customer Help</Link>
                </li>
                <li className="body-S-500 text-gray-400">
                  <Link href={"/"}>About Us</Link>
                </li>
              </ul>
            </div>
            {/* Download APP */}
            <div className="flex flex-col gap-3">
              <h3 className="uppercase label-2 text-gray-00">Download App</h3>
              <ul className="flex flex-col gap-3">
                <li className="bg-gray-800 flex gap-4 py-4 px-5 items-center justify-center rounded-[3px] max-w-[176px]">
                  <GooglePlayLogo weight="fill" size={32} />
                  <div className="flex flex-col">
                    <span className="font-normal text-[11px]">Get it now</span>
                    <span className="leading-[20px] font-semibold text-[14px]">
                      Google Play
                    </span>
                  </div>
                </li>
                <li className="bg-gray-800 flex gap-4 py-4 px-5 items-center justify-center rounded-[3px]  max-w-[176px]">
                  <AppleLogo weight="fill" size={32} />
                  <div className="flex flex-col">
                    <span className="font-normal text-[11px]">Get it now</span>
                    <span className="leading-[20px] font-semibold text-[14px]">
                      App Store
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            {/* Popular Tag */}
            <div className="flex flex-col gap-3">
              <h3 className="uppercase label-2 text-gray-00">Popular Tag</h3>
              <div className="flex flex-wrap gap-[10px]">
                <div className="hover:bg-gray-200/90 cursor-pointer flex items-center justify-center body-S-500 text-gray-00 px-[12px] py-[6px] border border-gray-800 rounded-[2px]">
                  Game
                </div>
                <div className="hover:bg-gray-200/90 cursor-pointer flex items-center justify-center body-S-500 text-gray-00 px-[12px] py-[6px] border border-gray-800 rounded-[2px]">
                  iPhone
                </div>
                <div className="hover:bg-gray-200/90 cursor-pointer flex items-center justify-center body-S-500 text-gray-00 px-[12px] py-[6px] border border-gray-800 rounded-[2px]">
                  TV
                </div>
                <div className="hover:bg-gray-200/90 cursor-pointer flex items-center justify-center body-S-500 text-gray-00 px-[12px] py-[6px] border border-gray-800 rounded-[2px]">
                  Asus Laptops
                </div>
                <div className="hover:bg-gray-200/90 cursor-pointer flex items-center justify-center body-S-500 text-gray-00 px-[12px] py-[6px] border border-gray-800 rounded-[2px]">
                  iPhone
                </div>
                <div className="hover:bg-gray-200/90 cursor-pointer flex items-center justify-center body-S-500 text-gray-00 px-[12px] py-[6px] border border-gray-800 rounded-[2px]">
                  TV
                </div>
                <div className="hover:bg-gray-200/90 cursor-pointer flex items-center justify-center body-S-500 text-gray-00 px-[12px] py-[6px] border border-gray-800 rounded-[2px]">
                  Asus Laptops
                </div>
                <div className="hover:bg-gray-200/90 cursor-pointer flex items-center justify-center body-S-500 text-gray-00 px-[12px] py-[6px] border border-gray-800 rounded-[2px]">
                  iPhone
                </div>
                <div className="hover:bg-gray-200/90 cursor-pointer flex items-center justify-center body-S-500 text-gray-00 px-[12px] py-[6px] border border-gray-800 rounded-[2px]">
                  TV
                </div>
                <div className="hover:bg-gray-200/90 cursor-pointer flex items-center justify-center body-S-500 text-gray-00 px-[12px] py-[6px] border border-gray-800 rounded-[2px]">
                  Asus Laptops
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="text-center body-S-400 text-gray-300 py-6 border-t border-t-gray-800 ">
        Orion - eCommerce Template © 2024. Design by SylvainCodes
      </div>
    </section>
  );
}

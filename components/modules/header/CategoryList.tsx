"use client";

import { CaretRight } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

export default function CategoryList() {
  return (
    <div className="absolute h-[420px] w-[240px] shadow-xl top-[64px] border border-zinc-300 py-1.5">
      <ul>
        <li className="h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50">
          <span className="body-S-400 group-hover:font-medium">
            Computer & Laptop
          </span>
        </li>
        <li className="h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50">
          <span className="body-S-400 group-hover:font-medium">
            Computer Accessories
          </span>
        </li>
        <li className="h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50">
          <span className="body-S-400 group-hover:font-medium">SmartPhone</span>
          <CaretRight size={12} weight="bold" />
          {/* sub menu */}
          <div className="hidden group-hover:grid absolute lg:w-[868px] bg-white shadow-xl border border-zinc-300 top-0 left-[250px] p-5 xl:grid-cols-[164px_1fr_1fr] lg:grid-cols-[100px_1fr_1fr] gap-5">
            <div className="">
              <ul>
                <li className="group hover:bg-gray-50 h-[36px] px-4 flex items-center">
                  <span className="capitalize body-S-400 text-gray-600 group-hover:body-S-500">All</span>
                </li>
                <li className="group hover:bg-gray-50 h-[36px] px-4 flex items-center">
                  <span className="capitalize body-S-400 text-gray-600 group-hover:body-S-500">IPhone</span>
                </li>
                <li className="group hover:bg-gray-50 h-[36px] px-4 flex items-center">
                  <span className="capitalize body-S-400 text-gray-600 group-hover:body-S-500">Samsung</span>
                </li>
                <li className="group hover:bg-gray-50 h-[36px] px-4 flex items-center">
                  <span className="capitalize body-S-400 text-gray-600 group-hover:body-S-500">Realme</span>
                </li>
                <li className="group hover:bg-gray-50 h-[36px] px-4 flex items-center">
                  <span className="capitalize body-S-400 text-gray-600 group-hover:body-S-500">Xiaomi</span>
                </li>
                <li className="group hover:bg-gray-50 h-[36px] px-4 flex items-center">
                  <span className="capitalize body-S-400 text-gray-600 group-hover:body-S-500">Oppo</span>
                </li>
                <li className="group hover:bg-gray-50 h-[36px] px-4 flex items-center">
                  <span className="capitalize body-S-400 text-gray-600 group-hover:body-S-500">Vivo</span>
                </li>
                <li className="group hover:bg-gray-50 h-[36px] px-4 flex items-center">
                  <span className="capitalize body-S-400 text-gray-600 group-hover:body-S-500">OnePlus</span>
                </li>
                <li className="group hover:bg-gray-50 h-[36px] px-4 flex items-center">
                  <span className="capitalize body-S-400 text-gray-600 group-hover:body-S-500">Huawei</span>
                </li>
                <li className="group hover:bg-gray-50 h-[36px] px-4 flex items-center">
                  <span className="capitalize body-S-400 text-gray-600 group-hover:body-S-500">Infinix</span>
                </li>
                <li className="group hover:bg-gray-50 h-[36px] px-4 flex items-center">
                  <span className="capitalize body-S-400 text-gray-600 group-hover:body-S-500">Tecno</span>
                </li>
              </ul>
            </div>
            <div className="">
                <div className="flex flex-col gap-4">
                    <span className="body-M-600 uppercase text-gray-900">featured phones</span>
                    <div className="flex items-center gap-3 p-3 border border-gray-100">
                        <Image src="/images/product_card.svg" alt="card image" height={80} width={80}/>
                        <div className="flex flex-col gap-2">
                            <span className="body-S-400">Samsung Electronics</span>
                            <span className="body-S-400">Samsung Galexy S21 5G</span>
                            <span className="body-S-600 text-secondary-500">160$</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border border-gray-100">
                        <Image src="/images/product_card.svg" alt="card image" height={80} width={80}/>
                        <div className="flex flex-col gap-2">
                            <span className="body-S-400">Samsung Electronics</span>
                            <span className="body-S-400">Samsung Galexy S21 5G</span>
                            <span className="body-S-600 text-secondary-500">160$</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border border-gray-100">
                        <Image src="/images/product_card.svg" alt="card image" height={80} width={80}/>
                        <div className="flex flex-col gap-2">
                            <span className="body-S-400">Samsung Electronics</span>
                            <span className="body-S-400">Samsung Galexy S21 5G</span>
                            <span className="body-S-600 text-secondary-500">160$</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/images/sub_banner.svg')] bg-cover"></div>
          </div>
        </li>
        <li className="h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50">
          <span className="body-S-400 group-hover:font-medium">Headphone</span>
        </li>
        <li className="h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50">
          <span className="body-S-400 group-hover:font-medium">
            Mobile Accessories
          </span>
        </li>
        <li className="h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50">
          <span className="body-S-400 group-hover:font-medium">
            Gaming Console
          </span>
        </li>
        <li className="h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50">
          <span className="body-S-400 group-hover:font-medium">
            Camera & Photo
          </span>
        </li>
        <li className="h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50">
          <span className="body-S-400 group-hover:font-medium">
            TV & Homes Appliances
          </span>
        </li>
        <li className="h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50">
          <span className="body-S-400 group-hover:font-medium">
            Watchs & Accessories
          </span>
        </li>
        <li className="h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50">
          <span className="body-S-400 group-hover:font-medium">
            GPS & Navigation
          </span>
        </li>
        <li className="h-[36px] capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50">
          <span className="body-S-400 group-hover:font-medium">
            Warable Technology
          </span>
        </li>
      </ul>
    </div>
  );
}

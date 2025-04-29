"use client";

import { Badge } from "@/components/custom/Badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { m } from "framer-motion";
import axios from "axios";
import { TypeProductModel } from "@/types/models";

export default function SearchInput({ className }: { className?: string }) {
  const [openDropDow, setOpenDropDow] = useState(false);
  const [data, setData] =  useState<TypeProductModel[]>();
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.currentTarget.value;
    if(search.length>1) {
      await axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/api/public/products", { 
        params: { search } 
      }).then((response) => {
        setData(response.data.data)
      })
      .catch((err) => console.log(err))
      .finally(() => {});

    }
  }
  return (
    <div className={cn(className, "px-2, relative")} onMouseLeave={() => setOpenDropDow(false)}>
      <Input
        className="border-none shadow-none focus-visible:ring-0 focus:ring-white"
        onMouseDown={() => setOpenDropDow(!openDropDow)}
        onInput={handleSearch}
        placeholder="Search for anything"
      />
      <Button variant="icon">
        <Search />
      </Button>

      {/* search dropdown */}
      <m.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "hidden h-max-[480px] z-50 absolute w-full top-12 bg-white border overflow-auto backdrop-filter shadow-gray-700 shadow-md left-0",
          openDropDow && "block"
        )}
      >
        <div className="flex flex-col">
          {
            data?.map((item: TypeProductModel, idx) => (
            <Link
              key={idx}
              href="/"
              className="flex items-center gap-4 py-4 px-4 border-2 border-white hover:border-secondary-700"
            >
              <Image
                src={item.images[0].url}
                width={80}
                height={80}
                alt="product image"
              />
              <div className="flex flex-col gap-1">
                <h3 className="label-1">{item.name}</h3>
                <Badge variant="soldOut">{item.discount}</Badge>
                <h3 className="label-1 text-">{item.price}$</h3>
              </div>
            </Link>
            ))
          }

        </div>
      </m.div>
    </div>
  );
}

"use client";

import { addToCart } from "@/store/cartSlice";
import {
  TypeCategoryModel,
  TypeProductModel,
  TypeSlideModel,
} from "@/types/models";
import { CaretRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

export default function CategoryList({
  categories,
  products,
  campaigns,
}: {
  categories: TypeCategoryModel[];
  products: TypeProductModel[];
  campaigns: TypeSlideModel[];
}) {
  const router = useRouter();
  const filterProducts = products?.filter((item) => item.featured === true);
  const dispatch = useDispatch();

  const handleAddCampaignProduct = (product: TypeProductModel) => {
    console.log("add to cart", product);
    dispatch(
      addToCart({
        store: product.store,
        variant: product.productVariants[0],
        productName: product.name,
        productImage: product.images[0].url,
        qty: 1,
      })
    );
    toast.success(`${product.name} added to cart!`, {
      duration: 3000,
      description: "View your shopping cart to checkout",
    });
  };

  return (
    <div className="absolute h-[420px] w-[240px] shadow-xl top-[64px] border border-zinc-300 py-1.5">
      <ul>
        {categories.map((item: TypeCategoryModel, idx) => (
          <li
            key={idx}
            className="h-[36px]  capitalize w-full flex items-center justify-between px-4 group cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          >
            <Link href={`/categories/${item.slug}/products`}>
              <span className="body-S-400 group-hover:font-medium">
                {item.name}
              </span>
            </Link>

            {item.subCategory.length > 0 && (
              <>
                {/* sub category */}
                <CaretRight size={12} weight="bold" />
                <div className="hidden group-hover:block absolute top-0 left-full w-[14px] h-full"></div>
                <div className="hidden group-hover:grid absolute lg:w-[868px] bg-white shadow-xl border border-zinc-300 top-0 left-[250px] p-5 xl:grid-cols-[164px_1fr_1fr] lg:grid-cols-[100px_1fr_1fr] gap-5">
                  <div className="">
                    <ul>
                      {item.subCategory.map((subItem, idx_sub) => (
                        <li
                          onClick={() =>
                            router.push(`/categories/${item.slug}/products`)
                          }
                          key={idx_sub}
                          className="group hover:bg-gray-50 h-[36px] px-4 flex items-center"
                        >
                          <span className="capitalize body-S-400 text-gray-600 group-hover:body-S-500">
                            {subItem.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="">
                    <div className="flex flex-col gap-4">
                      <span className="body-M-600 uppercase text-gray-900">
                        featured phones
                      </span>
                      {filterProducts
                        ?.slice(0, 3)
                        .map((itemFilter, idxFilter) => (
                          <div
                            key={idxFilter}
                            className="flex items-center gap-3 p-3 border border-gray-100"
                          >
                            <div className="w-[80px] h-[80px] flex-shrink-0 flex items-center justify-center overflow-hidden">
                              <Image
                                src={itemFilter.images[0].url ?? ""}
                                alt="card image"
                                height={80}
                                width={80}
                                className="object-contain"
                              />
                            </div>

                            <div className="flex flex-col gap-2 flex-1">
                              <span className="body-S-400">
                                {itemFilter.name}
                              </span>
                              <span className="body-S-600 text-secondary-500">
                                {itemFilter.price}$
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                  {campaigns.length > 0 ? (
                    <div
                      className="bg-cover"
                      onClick={() =>
                        handleAddCampaignProduct(
                          campaigns[0].slideItem[0].product
                        )
                      }
                      style={{ backgroundImage: `url(${campaigns[0].image})` }}
                    ></div>
                  ) : (
                    <div className="bg-[url('/images/sub_banner.svg')] bg-cover"></div>
                  )}
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// "use client";

import React from "react";
import Container from "@/components/custom/Container";
import CustomBreadcrumb from "@/components/custom/CustomBreadcrumb";
import CategoryService from "@/services/category.service";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Funnel } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RectangleButton } from "@/components/custom/RectangleButton";
import ListProduct from "@/components/modules/list-product";

export default async function ProductsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", isCurrent: true },
  ];

  const categories = await CategoryService.getCategories();
  return (
    <section className="overflow-hidden">
      <CustomBreadcrumb items={breadcrumbItems} />
      <Container>
        {/* Products list will go here */}
        <div className="grid grid-cols-12 gap-10 mt-10">
          {/* categories */}
          <div className="col-span-3 hidden md:flex flex-col gap-4">
            <h3 className="uppercase">categories</h3>
            <RadioGroup
              className="flex flex-col space-y-2"
              defaultValue={categories[0]?.id || "all"}
            >
              {categories.map((category, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <RadioGroupItem value={category.id} id={category.id} />
                  <Label
                    className="text-gray-800 body-S-500 ml-3"
                    htmlFor={category.id}
                  >
                    {category.name}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          {/* products */}
          <div className="col-span-12 md:col-span-9">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center">
                  <Funnel size={18} />
                  <span className="text-gray-800 body-L-600 ml-1">Filter</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-800 body-L-600">Sort by:</span>
                  <Select>
                    <SelectTrigger className="w-[160px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="alphabetic">alphabetic</SelectItem>
                        <SelectItem value="priceLowToHight">
                          Price: Low to hight
                        </SelectItem>
                        <SelectItem value="priceHightToLow">
                          Price: High to low
                        </SelectItem>
                        <SelectItem value="latest">Latest</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 px-4 py-2 bg-gray-100">
                <div className="flex items-center justify-center">
                  <RectangleButton variant={"primary"} className="px-2 py-0">
                    Reset Filters
                  </RectangleButton>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-950 body-M-600">1</span>
                  <span className="text-gray-800 body-M-400">
                    Results found
                  </span>
                </div>
              </div>
              <div>
                {/* List of products will go here */}
                <ListProduct/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { TypeProductVariantModel } from "./models";

// Interface cho response từ API
export interface ApiListResponse<T> {
  result: {
    content: T[];
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
  }
}

export type CartItem = {
    store: string;
    variant: TypeProductVariantModel;
    productName: string;
    productImage: string;
    qty: number;
}

export type TypeCategoryModel = {
    id: string;
    name: string;
    description: string;
}

export type TypeImageModel = {
    id: string;
    imageUrl: string;
    isPrimary: boolean;
    createdAt?: Date;
}

export type TypeProductModel ={
    id: string;
    name: string;
    description: string;
    price: number; 
    stock: number;
    storeId: string;
    storeName: string;
    categoryId: string;
    categoryName: string;
    brandId: string;
    brandName: string;
    images: TypeImageModel[];
    createdAt?: Date;
    updatedAt?: Date;
}


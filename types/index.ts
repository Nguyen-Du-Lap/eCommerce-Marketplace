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

export interface ApiResponse<T> {
  code: number;
  message: string;
  result: T;
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

export type TypeCreateCategoryModel = {
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

export type TypeFormProduct = {
    id: string;
    name: string;
    categoryId: string;
    description: string;
    price: number;
    stock: number;
    brandId: string;
    storeId: string;
}

export type TypeLoginModel = {
    username: string;
    password: string;
    recaptchaToken: string;
}

export type TypeAuthenticationModel = {
    id: string;
    username: string;
    token: string;
    authenticated: boolean;
    roles: string[];
}

export type TypeRegisterModel = {
  username: string;
  email?: string;
  password: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
};

export type TypeUserModel = {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    dob: Date;
    roles: TypeRoleModel[];
}

export type TypeRoleModel = {
    name: string;
    description: string;
    permissions: string[];
}

export type TypeBrandModel = {
    id: string;
    name: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}





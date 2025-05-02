import { TypeProductVariantModel } from "./models";

export type CartItem = {
    store: string;
    variant: TypeProductVariantModel;
    productName: string;
    productImage: string;
    qty: number;
}
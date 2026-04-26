export type ProductType = {
    id: string | number;
    name: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: Record<string, string>;
}
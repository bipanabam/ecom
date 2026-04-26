import Link from "next/link";

import { ProductType } from "@/type";
import ProductCard from "./ProductCard";
import Categories from "./Categories";
import Filter from "./Filter";

// Temporary data
const products: ProductType[] = [
    {
        id: 1,
        name: "Nike Air Max 270",
        description: "The Nike Air Max 270 features Nike's biggest heel Air unit yet for a super-soft ride that feels as impossible as it looks. The sleek design is inspired by two icons of big Air: the Air Max 180 and Air Max 93.",
        price: 29.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["red"],
        images: {
            red: "/assets/product1-red.avif",
        },
    },
    {
        id: 2,
        name: "New Balance 990v5",
        description: "The New Balance 990v5 combines classic design with modern comfort, featuring a premium leather upper and responsive cushioning.",
        price: 39.99,
        sizes: ["S", "M", "L"],
        colors: ["green", "black"],
        images: {
            black: "/assets/product2-black.avif",
            green: "/assets/product2-green.avif",
        },
    },
    {
        id: 3,
        name: "Nike Air Max 270",
        description: "The Nike Air Max 270 features Nike's biggest heel Air unit yet for a super-soft ride that feels as impossible as it looks. The sleek design is inspired by two icons of big Air: the Air Max 180 and Air Max 93.",
        price: 29.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["red"],
        images: {
            red: "/assets/product1-red.avif",
        },
    },
    {
        id: 4,
        name: "New Balance 990v5",
        description: "The New Balance 990v5 combines classic design with modern comfort, featuring a premium leather upper and responsive cushioning.",
        price: 39.99,
        sizes: ["S", "M", "L"],
        colors: ["green", "black"],
        images: {
            black: "/assets/product2-black.avif",
            green: "/assets/product2-green.avif",
        },
    },
];

const ProductList = ({category, params}: {category: string, params: "homepage" | "products"}) => {
  return (
    <section className="w-full  px-10 py-6">
        <Categories />
        {params === "products" && <Filter />}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
           {products.map((product) => (
            <ProductCard key={product.id} product={product} />
           ))}
        </div>
        <Link 
            href={category ? `/products?category=${category}` : "/products"} 
            className="flex justify-end underline text-sm text-neutral mt-4"
        >
            View All Products
        </Link>
    </section>
  )
}

export default ProductList
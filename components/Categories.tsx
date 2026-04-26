"use client";

import { ShoppingBasket, Shirt, Footprints, Glasses, 
Briefcase, Venus, Hand } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const categories = [
    { id: 1, name: "All", icon: <ShoppingBasket className="w-4 h-4" />, slug: "all" },
    { id: 2, name: "Shirts", icon: <Shirt className="w-4 h-4" />, slug: "shirts" },
    { id: 3, name: "Shoes", icon: <Footprints className="w-4 h-4" />, slug: "shoes" },
    { id: 4, name: "Accessories", icon: <Glasses className="w-4 h-4" />, slug: "accessories" },
    { id: 5, name: "Bags", icon: <Briefcase className="w-4 h-4" />, slug: "bags" },
    { id: 6, name: "Dresses", icon: <Venus className="w-4 h-4" />, slug: "dresses" },
    { id: 7, name: "Jackets", icon: <Shirt className="w-4 h-4" />, slug: "jackets" },
    { id: 8, name: "Gloves", icon: <Hand className="w-4 h-4" />, slug: "gloves" },
];

const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category");

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", value || "all");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 bg-neutral/10 p-2 mb-4 rounded-lg text-sm">
        {categories.map((category) => (
            <div 
            key={category.id} 
            className={`inline-flex items-center gap-2 cursor-pointer px-2 py-2 rounded-md transition-colors ${selectedCategory === category.slug ? "text-foreground bg-card" : "text-neutral hover:text-foreground hover:bg-card"}`}
            onClick={() => handleChange(category.slug)}
            >
                {category.icon}
                <span className="ml-2">{category.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Categories
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { ShoppingCart } from "lucide-react";

import { ProductType } from "@/type";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [productType, setProductType] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  const handleProductTypeChange = ({type, value}: {type: "size" | "color", value: string}) => {
    setProductType((prev) => ({ ...prev, [type]: value }));
  }

  return (
    <div className="rounded-lg shadow-lg overflow-hidden hover:shadow-md transition-shadow">
      {/* Product image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-2/3">
          <Image
            src={product.images[productType.color]}
            alt={product.name}
            fill
            loading='eager'  
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>
      {/* Product details */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium font-epilogue text-foreground">{product.name}</h1>
        <p className="text-sm text-neutral font-inter">{product.description}</p>
        {/* Product Type */}
        <div className="flex items-center gap-4 text-xs">
          {/* Sizes */}
          <div className="flex flex-col gap-1">
            <span className="text-neutral">Size</span>
            <select name="size" id="size" className="ring ring-borderColor/50 rounded-md text-foreground/70 px-2 py-1">
              {product.sizes.map((size) => (
                <option 
                key={size} 
                value={size} 
                onChange={e => handleProductTypeChange({ type: "size", value: e.target.value })}
                >
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* Colors */}
          <div className="flex flex-col gap-1">
            <span className="text-neutral">Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div 
                className={`cursor-pointer border-2 rounded-full ${productType.color === color ? "border-borderColor" : "border-transparent"} p-[1.5]`}
                key={color}
                onClick={() => handleProductTypeChange({type:"color", value:color})}
                >
                  <div className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: color }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">

          <p className="text-lg font-medium text-foreground">${product.price.toFixed(2)}</p>
          <button className="ring-1 ring-borderColor/50 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer text-foreground flex items-center gap-2 hover:bg-foreground hover:text-white transition-colors">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
"use client";

import { ShoppingCart } from "lucide-react";

const CartButton = () => {
  return (
    <button
    type="button"
    className="relative hover:scale-110 transition-transform"
    onClick={() => console.log("Cart Button Clicked!!")}
    >
      <a href="/cart" className="relative">
        <ShoppingCart size={22} strokeWidth={1.5} />
        <span className="absolute -top-3 -right-3 flex items-center justify-center h-5 w-5 bg-secondary text-sm font-medium rounded-full">0</span>
      </a>
    </button>
  )
}

export default CartButton;
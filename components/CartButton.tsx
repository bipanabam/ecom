"use client";

import { ShoppingCart } from "lucide-react";

const CartButton = () => {
  return (
    <button
    type="button"
    className="relative hover:scale-110 transition-transform"
    onClick={() => console.log("Cart Button Clicked!!")}
    >
      <a href="#">
        <ShoppingCart size={22} strokeWidth={1.5} />
        <span className="absolute -top-2 -right-1 flex h-2 w-2 bg-[#FAFAFA]">0</span>
      </a>
    </button>
  )
}

export default CartButton;
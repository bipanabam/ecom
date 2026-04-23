"use client";

import { Heart } from "lucide-react";

const FavoriteButton = () => {
  return (
    <button
    type="button"
    className="hover:scale-110 transition-transform"
    onClick={() => console.log("Cart Button Clicked!!")}
    >
      <a href="#">
        <Heart size={22} strokeWidth={1.5} />
      </a>
    </button>
  )
}

export default FavoriteButton;
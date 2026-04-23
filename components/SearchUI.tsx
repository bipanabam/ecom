"use client";
import { Search } from "lucide-react";

const SearchUI = () => {
  return (
   <div className="relative flex items-center group">
        <input
        type="text"
        placeholder="SEARCH"
        className="bg-transparent border-2 border-[#ACADAD] py-1 px-2 font-inter text-xs font-bold tracking-widest text-[#ACADAD] focus:outline-none focus:border-foreground/80 transition-colors placeholder:text-[#ACADAD] w-48 lg:w-64"
        />
        <Search size={18} className="absolute right-2 text-[#ACADAD] group-focus-within:text-foreground transition-colors" />
    </div>
  )
}

export default SearchUI;
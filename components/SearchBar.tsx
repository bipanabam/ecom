"use client";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
   <div className="hidden md:flex relative items-center group">
      <input
      id="search"
      type="text"
      placeholder="SEARCH"
      className="bg-transparent border-2 border-b-4 border-borderColor py-2 px-2 font-inter text-xs font-bold tracking-widest text-borderColor focus:outline-none focus:border-foreground/80 transition-colors placeholder:text-borderColor w-48 lg:w-64"
      />
      <Search size={18} className="absolute right-2 text-borderColor group-focus-within:text-foreground transition-colors" />
    </div>
  )
}

export default SearchBar;
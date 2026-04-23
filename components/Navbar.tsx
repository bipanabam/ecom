import Link from "next/link";
import { Search, Heart, ShoppingCart } from "lucide-react";

import SearchUI from "../components/SearchUI";
import CartButton from "../components/CartButton";
import FavoriteButton from "../components/FavoriteButton";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
        <nav className="flex items-center justify-between px-10 py-6 bg-[#FAFAFA] backdrop-blur-[32px] transition-all">
          <div className="flex items-center gap-12">
            <Link href="/" className="logo">
              {/* Company Logo */}
              <h1 className="font-epilogue text-2xl font-bold tracking-[-0.04em] text-foreground">
                SHOPEEE
              </h1>
            </Link>
            <ul className="flex flex-row gap-8">
              <NavItem href="/" label="MEN" active />
              <NavItem href="/" label="WOMEN" />
              <NavItem href="/" label="KIDS" />
              <NavItem href="/" label="COLLECTIONS" />
            </ul>
          </div>
          
          {/* SEARCH BAR */}
          <div className="flex items-center gap-8">
            <SearchUI />

            <div className="flex items-center gap-6 text-[#2d2f2f]">
              <FavoriteButton />
              <CartButton />
            </div>
          </div>
        </nav>
    </header>
  )
}

export default Navbar

const NavItem = ({ href, label, active = false }: { href: string; label: string; active?: boolean }) => {
  return (
    <Link href={href} className="relative group">
      <p className={`font-inter text-sm font-bold tracking-widest transition-colors ${
          active ? "text-foreground" : "text-neutral hover:text-foreground"
        }`}>
        {label}
      </p>
      <div className={`absolute -bottom-2 left-0 h-[3px] w-full bg-[#2d2f2f] transition-transform duration-300 ${
        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`} />
    </Link>
  );
};
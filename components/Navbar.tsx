"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SearchBar from "./SearchBar";
import CartButton from "./CartButton";
import FavoriteButton from "./FavoriteButton";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!navRef.current) return;

    gsap.fromTo(
      navRef.current,
      {
        backgroundColor: "rgba(255,255,255,1)",
        backdropFilter: "blur(0px)",
        boxShadow: "0 0 0 rgba(0,0,0,0)",
      },
      {
        backgroundColor: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: navRef.current,
          start: "bottom top",
        },
      }
    );
  });
  return (
    <header className="sticky top-0 z-50 w-full">
        <nav ref={navRef} className="flex items-center justify-between px-7 py-4 sm:px-10 sm:py-6 bg-white transition-all">
          {/* Left */}
          <div className="flex items-center md:gap-6 lg:gap-12">
            <Link href="/" className="">
              {/* Company Logo */}
              <h1 className="font-epilogue text-2xl sm:text-3xl font-extrabold tracking-[-0.04em] text-foreground">
                SHOPEEEE
              </h1>
            </Link>
            {/* Navigation Links */}
            <ul className="hidden md:flex flex-row md:gap-4 lg:gap-8">
              <NavItem href="/" label="MEN" active />
              <NavItem href="/" label="WOMEN" />
              <NavItem href="/" label="KIDS" />
              <NavItem href="/" label="COLLECTIONS" />
            </ul>
          </div>
          
          {/* Right */}
          <div className="flex items-center md:gap-4 lg:gap-8">
            <SearchBar />

            <div className="flex items-center gap-4 lg:gap-6 text-[#2d2f2f]">
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
      <p className={`font-inter text-sm lg:text-[16px] font-bold tracking-widest transition-colors ${
          active ? "text-foreground" : "text-neutral hover:text-foreground"
        }`}>
        {label}
      </p>
      <div className={`absolute -bottom-2 left-0 h-1 w-full bg-[#2d2f2f] transition-transform duration-300 ${
        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`} />
    </Link>
  );
};
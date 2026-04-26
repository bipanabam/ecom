"use client";

import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

const FeaturedProduct = () => {
    const featuredProductRef = useRef<HTMLElement | null>(null);

    useGSAP(() => {
        if (!featuredProductRef.current) return;

        const split = new SplitText('.title',
            {type: 'chars, words'}
        );

        split.chars.forEach((chars) => chars.classList.add('text-gradient'));

        gsap.from(split.chars, {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: 'expo.out',
            stagger: 0.05
        });
    });
    
    return (
    <section id="hero" className="relative w-full mb-12" ref={featuredProductRef}>
        <div className='relative aspect-2/1'>
            <Image src="/assets/fff.avif" alt="Featured Product" fill loading='eager' />
        </div>
        <div className='absolute top-1/2 transform -translate-y-1/2 left-7 flex flex-col'>
            <h1 className='title font-epilogue text-4xl md:text-6xl lg:text-8xl font-bold'>
                PRECISION
                <br />
                MEETS
                <br />
                POWER
            </h1>
        </div>
    </section>
  )
}

export default FeaturedProduct
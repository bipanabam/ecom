"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

const Filter = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    
    const handleFilterChange = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("sort", value || "newest");
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

  return (
    <div className="flex items-center justify-end gap-2 text-sm  text-foreground/70 my-5">
        <span className="">Sort by:</span>
        <select 
            id="sort" 
            name="sort" 
            className="ring-1 ring-borderColor/50 shadow-md p-1 rounded-sm"
            onChange={(e) => handleFilterChange(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
        </select>
    </div>
  )
}

export default Filter
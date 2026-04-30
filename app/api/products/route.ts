import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest, { searchParams }: { searchParams: URLSearchParams }) {
    try {
        const { searchParams } = new URL(req.url);
        const category = searchParams.get("category");
        // For now, we are not filtering by category
        const products = await prisma.product.findMany({
            include: {
                variants: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        }
        );

        // const formattedProducts = products.map((product) => {
        //     const colors = [...new Set(product.variants.map(v => v.color))];
        //     const sizes = [...new Set(product.variants.map(v => v.size))];

        //     const images: Record<string, string> = {};

        //     product.variants.forEach((variant) => {
        //         if (!images[variant.color]) {
        //             images[variant.color] = variant.images[0]; // first image
        //         }
        //     });

        //     return {
        //         ...product,
        //         colors,
        //         sizes,
        //         images,
        //         price: product.basePrice,
        //     };
        // });
        return NextResponse.json(products);
    } catch (e) {
        console.error("Error fetching products:", e);
        return NextResponse.json(
            { message: "Failed to fetch products", error: e instanceof Error ? e.message : "Unknown error" },
            {status: 500}
        );
    }
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        let product;

        try {
            product = Object.fromEntries(formData.entries());
        } catch (e) {
            console.error("Error parsing form data:", e);
            return NextResponse.json({ message: "Invalid form data", error: e instanceof Error ? e.message : "Unknown error" }, { status: 400 });
        }

        let slug: string;
        slug = (product.name as string).toLowerCase().replace(/\s+/g, "-");
        const existingProduct = await prisma.product.findUnique({ where: { slug } });
        if (existingProduct) {
            slug = `${slug}-${Date.now()}`;
        }

        const newProduct = await prisma.product.create({
            data: {
                name: product.name as string,
                slug: slug,
                description: product.description as string,
                basePrice: parseFloat(product.price as string),
            },
        });
        return NextResponse.json(newProduct, { status: 201 });
    } catch (e) {
        console.error("Error creating product:", e);
        return NextResponse.json(
            { message: "Failed to create product", error: e instanceof Error ? e.message : "Unknown error" },
            { status: 500 }
        );
    }
}


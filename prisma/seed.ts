import { PrismaClient} from "../lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
    adapter
});


async function seed () {
    const products = [
        {
            title: "Nike Air Max 270",
            slug: "nike-air-max-270",
            basePrice: 24.99,
            colors: ["red"],
        },
        {
            title: "New Balance 990v5",
            slug: "new-balance-990v5",
            description: "The New Balance 990v5 combines classic design with modern comfort, featuring a premium leather upper and responsive cushioning.",
            overview: "The New Balance 990v5 is a perfect blend of style and comfort. With its premium leather upper and responsive cushioning, it's designed to provide all-day support. Whether you're hitting the gym or running errands, these sneakers will keep you comfortable and looking great.",
            basePrice: 39.99,
            colors: ["green", "black"],
        },
        {
            title: "Classic Anime White T-Shirt",
            slug: "classic-anime-white-tshirt",
            description: "A timeless white t-shirt made from 100% cotton. Perfect for any casual occasion.",
            basePrice: 19.99,
            overview: "This classic white t-shirt features a comfortable fit and is made from high-quality cotton. It's perfect for everyday wear and can be easily styled with jeans, shorts, or skirts.", 
            colors: ["white"],
        }
    ];

    for (const p of products) {
        const created = await prisma.product.create({
            data: {
            title: p.title,
            slug: p.slug,
            description: p.description,
            overview: p.overview || "",
            basePrice: p.basePrice,
            },
        });

        const variants = [];

        for (const color of p.colors) {
            for (const size of ["S", "M", "L"]) {
            variants.push({
                productId: created.id,
                color,
                size,
                sku: `${p.slug}-${color}-${size}`,
                stock: 10,
                images: [`/assets/${p.slug}/${color}/front.jpg`],
            });
            }
        }

        await prisma.variant.createMany({ data: variants });
    }
}

seed().then(() => prisma.$disconnect());
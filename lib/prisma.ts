import { PrismaClient } from "../generated/prisma/client"; 
import { PrismaPg } from "@prisma/adapter-pg"; 

/**
 * In development, hot reloading can cause multiple instances of this file to be evaluated,
 * which can lead to multiple instances of Prisma Client being created. To prevent this,
 * we can use a global variable to store the instance of Prisma Client and reuse it across
 * hot reloads.
 */
const globalForPrisma = global as unknown as {
  prisma: PrismaClient; 
}; 

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL, 
}); 


const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter, 
  }); 


if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma; 
export default prisma; 
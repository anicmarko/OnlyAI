import {PrismaClient} from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
};

// FIX: a lot of prisma clients initialized when hot reloading
const prismadb = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb; 

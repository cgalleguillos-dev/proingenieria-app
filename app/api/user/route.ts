import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../prismaClient";
import { hashPassword } from "@/lib";


export const POST = async (req: NextRequest, res: NextResponse) => {
    const { email, name, password, role, job } = await req.json();
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
        data: {
            email: email,
            name: name,
            password: password,
            role: role,
            job: job,
        },
    });
    return NextResponse.json(user);
};

export const GET = async (req: NextRequest, res: NextResponse) => {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
};
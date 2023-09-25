import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/app/api/prismaClient";
import { comparePassword } from "@/lib";
import { cookies } from 'next/headers';
export const POST = async (req: NextRequest, res: NextResponse) => {
    const { email, password } = await req.json();
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });
    if (!user) {
        return NextResponse.json(
            { message: "User not found" },
            { status: 404 }
        )
    }
    const valid = await comparePassword(password, user.password);
    if (!valid) {
        return NextResponse.json(
            { message: "Invalid password" },
            { status: 401 }
        )
    }

    const token = jwt.sign(
        { email: user!.email, id: user!.id, name: user!.name },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" }
    );
    cookies().set('authTokens', token, { sameSite: 'strict', httpOnly: true, maxAge: 60 * 60 * 24 });
    return new NextResponse(JSON.stringify({ token }),{
            status: 200
        }
    );
};

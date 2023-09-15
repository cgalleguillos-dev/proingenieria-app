import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "../prismaClient";
import Cookies from 'js-cookie';
import { comparePassword } from "@/lib";

export const POST = async (req: NextRequest, res: NextResponse) => {
    const { email, password } = await req.json();
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });
    if (!user) {
        return NextResponse.next();
    }
    const valid = await comparePassword(user.password, password);
    if (!valid) {
        return NextResponse.next();
    }

    const token = jwt.sign(
        { email: user!.email, id: user!.id, name: user!.name },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" }
    );
    Cookies.set("authTokens", token);

    return NextResponse.json({ message: "success" }, { status: 200 });

};

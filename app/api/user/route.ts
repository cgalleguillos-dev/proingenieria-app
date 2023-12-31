import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/api/prismaClient";
import { hashPassword } from "@/lib";


export const POST = async (req: NextRequest, res: NextResponse) => {
    const { email, rut, fullName, name, password, roleId, jobId } = await req.json();
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
        data: {
            email: email,
            name: name,
            password: hashedPassword,
            roleId: roleId,
            jobId: jobId,
            rut: rut,
            fullName: fullName
        },
    });
    return NextResponse.json(user);
};

export const GET = async (req: NextRequest, res: NextResponse) => {
    const users = await prisma.user.findMany(
      {
        include: {
          role: true,
          job: true,
        }
      }
    );
    return NextResponse.json(users);
};
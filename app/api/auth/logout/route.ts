import { NextResponse, NextRequest } from "next/server";
import { cookies } from 'next/headers';

export const POST = async (req: NextRequest, res: NextResponse) => {
    cookies().set('authTokens', '', { sameSite: 'strict', httpOnly: true, maxAge: 0 });
    return NextResponse.redirect(new URL('/login', req.url));
}
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
    const authTokens = req.cookies.get('next-auth.session-token')?.value;
    if (!req.nextUrl.pathname.startsWith('/login') && !authTokens) {
        const res = NextResponse.redirect(new URL('/login', req.url));
        return res;
    }

    else if (req.nextUrl.pathname.startsWith('/login') && authTokens) {
        const res = NextResponse.redirect(new URL('/', req.url));
        return res;
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/login', '/form', '/user', '/ejecutor/:path*', '/reportes/:path*', '/admin/:path*'],
}
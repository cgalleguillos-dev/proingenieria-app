import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
    const authTokens = req.cookies.get('authTokens')?.value;

    if (!req.nextUrl.pathname.startsWith('/login') && !authTokens) {
        const res = NextResponse.redirect(new URL('/login', req.url));
        return res;
    }

    else if (req.nextUrl.pathname.startsWith('/login') && authTokens) {
        const res = NextResponse.redirect(new URL('/', req.url));
        console.log('' +
          'Redirecting to /home');
        return res;
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/home', '/login', '/form', '/user', '/executor'],
}
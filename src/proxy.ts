import { NextRequest, NextResponse } from 'next/server'

export default function proxy(req: NextRequest, res: NextResponse) {
   const isHasAccessToken = req.cookies.has('accessToken') || req.cookies.has('refreshToken')
   const { pathname } = req.nextUrl
   if (isHasAccessToken && pathname.startsWith('/auth')) {
      return NextResponse.redirect(new URL('/', req.url))
   }
}

export const config = {
   matcher: ['/auth/:path*']
}

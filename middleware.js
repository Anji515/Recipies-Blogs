import { NextResponse } from 'next/server'
 
export async function middleware(request) {
  const cookies = request.cookies.get(process.env.NEXT_PUBLIC_MIDDLEWARE_KEY)  
  if(!cookies){
      return NextResponse.redirect(new URL('/login', request.url))
  }
}
 
export const config = {
  matcher: ['/contact','/recipes','/recent-recipes','/recipes/:path*','/profile']
}
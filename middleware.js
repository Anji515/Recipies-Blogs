import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const cookies = request.cookies.get('sb-nrudbmtbaygkkolopcda-auth-token')

  console.log('middleware',cookies)
  
  if(!cookies){
      return NextResponse.redirect(new URL('/login', request.url))
  }
}
 

export const config = {
  matcher: ['/contact','/recipes','/recipes/:path*']
}
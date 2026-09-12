import { NextResponse, type NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const theme = request.cookies.get('theme')?.value || 'light'
  const response = NextResponse.next()
  response.headers.set('x-injected-theme', theme)
  return response
}

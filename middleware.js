import { NextResponse } from 'next/server';

export function middleware(req) {
  const host = req.headers.get('host'); 
  const subdomain = host.split('.')[0];

  // map subdomain → project URL
  const routes = {
    "insight-engine": "https://hackrx-bajaj-api.onrender.com/docs",
    "invisidata": "https://invisi-data.onrender.com/",
    "wonderlust": "https://wonderlust-o9ym.onrender.com/"
  };

  if (routes[subdomain]) {
    return NextResponse.redirect(routes[subdomain]);
  }

  return new NextResponse("Project not found", { status: 404 });
}

export const config = {
  matcher: ['/'],
};
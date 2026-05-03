import { NextResponse } from 'next/server';

export function middleware(req) {
  const host = req.headers.get("host");
  const subdomain = host.split(".")[0];

  if (subdomain === "insightengine") {
    return Response.redirect("https://hackrx-bajaj-api.onrender.com/docs");
  }

  if (subdomain === "invisidata") {
    return Response.redirect("https://invisi-data.onrender.com/");
  }

  if (subdomain === "wonderlust") {
    return Response.redirect("https://wonderlust-o9ym.onrender.com/");
  }

  return new Response("Project not found");
}

export const config = {
  matcher: ['/'],
};
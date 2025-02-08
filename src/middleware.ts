import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req:NextRequest) {
  const { pathname } = req.nextUrl;

  // Obtener el token de autenticación
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  // Si no hay token, redirigir al login
  if (pathname.startsWith("/admin") && !token) {
    const loginUrl = new URL("/login", req.url);
   /*  loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname); */ // Guardar URL original
    return NextResponse.redirect(loginUrl);
  }


  // Validar el acceso a rutas que comienzan con /admin
  if (pathname.startsWith("/admin") && token!.rol !== "admin") {
    // Si el usuario no es admin, redirigir al dashboard de cliente
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Permitir el acceso si pasa todas las validaciones
  return NextResponse.next();
}

// Configuración del matcher para proteger las rutas específicas
export const config = {
  matcher: [
    "/admin/:path*", // Proteger todas las rutas que comienzan con /admin
    "/",             // Validar redirección desde la raíz según el rol
  ],
};

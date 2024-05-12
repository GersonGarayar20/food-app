import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Providers } from "@/util/Providers";

const roboto = Roboto({
  weight: ["100", "300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Food App",
  description: "Pide tu comida de una manera rapida y sencilla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <Providers>
          <main className="max-w-7xl mx-auto min-h-screen md:px-8 px-4">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

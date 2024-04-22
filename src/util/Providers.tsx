"use client"

import { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { FavoriteProvider } from "@/app/context/favorite";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <FavoriteProvider>
        {children}
        </FavoriteProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
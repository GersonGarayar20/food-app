"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      className="py-6 flex items-center justify-between rounded-full"
      variant={"ghost"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      Cambiar de modo
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
};

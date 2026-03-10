"use client"

import * as React from "react"
import { Moon, Sun, Ghost } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button" // Assuming shadcn, but I might not have it setup. I'll use standard button for now.

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="cursor-pointer relative p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-slate-900 dark:text-slate-100" />
      <Moon className="absolute top-2 left-2 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-slate-900 dark:text-slate-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

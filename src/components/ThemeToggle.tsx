"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const dark = savedTheme === "dark";
    document.documentElement.classList.toggle("dark", dark);
    setIsDark(dark);
  }, []);

  const toggleTheme = () => {
    const dark = !isDark;
    document.documentElement.classList.toggle("dark", dark);
    window.localStorage.setItem("theme", dark ? "dark" : "light");
    setIsDark(dark);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

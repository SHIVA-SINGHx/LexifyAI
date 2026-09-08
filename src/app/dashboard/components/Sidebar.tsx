import { CreditCard, History, Sparkles, WandSparkles } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const menu = [
  {
    name: "Lexify Tools",
    icon: WandSparkles,
    path: "/dashboard",
  },
  {
    name: "History",
    icon: History,
    path: "/dashboard/history",
  },
  {
    name: "Upgrade",
    icon: CreditCard,
    path: "/dashboard/upgrade",
  },
];

const Sidebar = () => {
  return (
    <div className="flex h-screen flex-col bg-white p-5 shadow-lg dark:bg-slate-950 dark:shadow-slate-950/40">
      <div className="flex items-center space-x-2 mb-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-purple-600">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <Link href={"/"}>
        <span className="cursor-pointer text-2xl font-bold text-slate-900 dark:text-white">LexifyAI</span>
        </Link>
      </div>
      <div className="flex grow flex-col justify-between">
        <div className="space-y-2">
          {menu.map((menuItem) => (
            <Link
              href={menuItem.path}
              key={menuItem.name}
              className="flex gap-3 rounded-lg p-3 transition-colors duration-200 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <menuItem.icon className="h-6 w-6" />
              <h2 className="text-lg font-medium">{menuItem.name}</h2>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <div className="flex flex-col items-center gap-3">
            <ThemeToggle />
            <p className="text-center text-sm text-gray-500 dark:text-slate-500">© 2026 LexifyAI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

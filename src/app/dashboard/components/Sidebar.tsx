import { CreditCard, History, Sparkles, WandSparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

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
    <div className="p-5 bg-white h-screen flex flex-col shadow-lg">
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <Link href={"/"}>
        <span className="text-2xl font-bold text-slate-900 cursor-pointer">LexifyAI</span>
        </Link>
      </div>
      <div className="flex-grow flex flex-col justify-between">
        <div className="space-y-2">
          {menu.map((menuItem) => (
            <Link
              href={menuItem.path}
              key={menuItem.name}
              className="flex gap-3 p-3 rounded-lg hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white transition-colors duration-200"
            >
              <menuItem.icon className="h-6 w-6" />
              <h2 className="text-lg font-medium">{menuItem.name}</h2>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-500 text-center">© 2025 LexifyAI. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

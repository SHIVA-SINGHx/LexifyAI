import { CreditCard, History, Sparkles, WandSparkles } from "lucide-react";
import Link from "next/link";
import path from "path";
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
    <div className="p-5 bg:white h-[800px] flex flex-col">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-slate-900">LexifyAI</span>
      </div>


      <div className="m-10 h-max flex flex-col justify-between">
        {
            menu.map((menu)=>(
                <Link href={menu.path} key={menu.name} className="flex gap-2 mb-2 hover:bg-primary hover:text-white cursor-pointer rounded-lg items-center">
                    <menu.icon className="h-6 w-6"></menu.icon>
                    <h2 className="text-lg">{menu.name}</h2>
                
                </Link>
            ))
        }

      </div>
    </div>
  );
};

export default Sidebar;

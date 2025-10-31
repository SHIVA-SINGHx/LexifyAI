"use client";

import Link from "next/link";
import { contentTemplates } from "@/lib/content";

const DashboardPage = () => {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {contentTemplates.map((template) => (
        <Link key={template.slug} href={`/dashboard/${template.slug}`}>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg cursor-pointer transition">
            <div className="flex flex-col items-center text-center">
              <template.icon className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold">{template.name}</h3>
              <p className="text-gray-500 text-sm mt-2">{template.desc}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DashboardPage;
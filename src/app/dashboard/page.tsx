"use client";

import Link from "next/link";
import { contentTemplates } from "@/lib/content";

const DashboardPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">AI Content Templates</h1>

      <div className="grid grid-cols-3 gap-6">
        {contentTemplates.map((template) => (
          <Link
            key={template.slug}
            href={`/dashboard/${template.slug}`}
            className="bg-white border p-5 rounded-lg hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-3">
              <template.icon className="text-2xl text-blue-600" />
              <h2 className="font-semibold">{template.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;

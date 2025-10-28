"use client";

import { useState } from "react";
import Link from "next/link";
import { contentTemplates } from "@/lib/content";

export const Template = () => {
  const [templateList, setTemplateList] = useState(contentTemplates);

;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 mt-5">
      {templateList.map((template) => (
        <div key={template.slug}>
          <Link
            href={`/dashboard/${template.slug}`}
            className="bg-white w-full rounded-lg h-[200px] py-4 px-4 text-center flex flex-col justify-center"
          >
            <template.icon className="h-12 w-12 mx-auto"></template.icon>
            <h2 className="font-semibold mt-5">{template.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};
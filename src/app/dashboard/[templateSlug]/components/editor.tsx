"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useMemo } from "react";
import "react-quill-new/dist/quill.snow.css";

export const Editor = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => {
  const [mounted, setMounted] = useState(false);
  const ReactQuill = useMemo(() => dynamic(() => import("react-quill-new"), { ssr: false }), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
    }),
    []
  );

  if (!mounted) return null;

  return (
    <div className="bg-white rounded-lg border p-2">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        className="h-[350px] pb-10 whitespace-pre-wrap"
      />
    </div>
  );
};

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";
import { useState } from "react";
import { chatSession } from "@/lib/gemini-ai";
import axios from "axios";
import { contentTemplates } from "@/lib/content";
import { Editor } from "./components/editor";

interface TemplatePageProps {
  params: {
    templateSlug: string;
  };
}

const TemplatePage = ({ params }: TemplatePageProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [aiOutput, setAIOutput] = useState<string>("");

  const selectedTemplate = contentTemplates.find(
    (item) => item.slug === params.templateSlug
  );

  if (!selectedTemplate) {
    return (
      <div className="p-10">
        <h2 className="text-xl font-bold text-red-600">
          Template Not Found
        </h2>
        <p className="text-gray-600">
          The requested template doesn’t exist. Please go back to dashboard.
        </p>
      </div>
    );
  }

  const generateAIContent = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const dataSet = {
        title: formData.get("title"),
        description: formData.get("description"),
      };

      const selectedPrompt = selectedTemplate.aiPrompt;
      const finalAIPrompt = JSON.stringify(dataSet) + ", " + selectedPrompt;

      const result = await chatSession.sendMessage(finalAIPrompt);
      setAIOutput(result.response.text());

      await axios.post("/api/", {
        title: dataSet.title,
        description: result.response.text(),
        templateUsed: selectedTemplate.name,
      });

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-6">{selectedTemplate.name}</h1>

      <form action={generateAIContent} className="space-y-6 bg-white p-6 rounded-lg shadow">
        {selectedTemplate.form.map((form) => (
          <div key={form.label}>
            <label className="block mb-2 font-medium">{form.label}</label>
            {form.field === "input" ? (
              <Input name="title" placeholder="Enter title..." />
            ) : (
              <Textarea name="description" placeholder="Enter details..." />
            )}
          </div>
        ))}

        <Button type="submit" className="mt-4">
          {isLoading ? <Loader className="animate-spin" /> : "Generate Content"}
        </Button>
      </form>

      <div className="mt-10">
        <Editor value={isLoading ? "Generating..." : aiOutput} />
      </div>
    </div>
  );
};

export default TemplatePage;

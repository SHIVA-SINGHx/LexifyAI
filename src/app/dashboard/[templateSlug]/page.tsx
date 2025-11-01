"use client";

import { use } from "react";
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
  templateSlug: string;
}

const TemplatePage = ({ params }: TemplatePageProps) => {
  const resolvedParams = use(params);
  const { templateSlug } = resolvedParams;

  const [isLoading, setIsLoading] = useState(false);
  const [aiOutput, setAIOutput] = useState<string>("");

  const selectedTemplate = contentTemplates.find(
    (item) => item.slug === templateSlug
  );

  if (!selectedTemplate) {
    return (
      <div className="p-10">
        <h2 className="text-xl font-bold text-red-600">Template Not Found</h2>
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
      <div className="mt-5 py-6 px-4 bg-black text-white rounded">
        <h2 className="font-medium">{selectedTemplate.name}</h2>
      </div>

      <form>
        <div className="mt-8">
          {selectedTemplate.form.map((form) => (
            <div key={form.label}>
              <label>{form.label}</label>
              {form.field === "input" ? (
                <div className="mt-5">
                  <Input name="title" />
                </div>
              ) : (
                <div className="mt-5">
                  <Textarea name="description" required />
                </div>
              )}
            </div>
          ))}
        </div>
        <Button className="mt-5 cursor-pointer" type="submit">
          {isLoading ? (
            <Loader className="animate-spin"></Loader>
          ) : (
            "Generate Content"
          )}
        </Button>
      </form>
      <div className="my-10">
        <Editor value={aiOutput} onChange={setAIOutput} />

      </div>
    </div>
  );
};

export default TemplatePage;

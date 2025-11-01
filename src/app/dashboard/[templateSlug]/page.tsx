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
  const { templateSlug } = params;

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
      const title = formData.get("title") as string;
      const description = formData.get("description") as string;

      const selectedPrompt = selectedTemplate.aiPrompt;
      const finalPrompt = `${selectedPrompt}\n\nTitle: ${title}\nDescription: ${description}`;

      //Call Gemini API
      const result = await chatSession.sendMessage(finalPrompt);
      const responseText = await result.response.text();

      setAIOutput(responseText);

      // Save to DB (optional)
      await axios.post("/api", {
        title,
        description: responseText,
        templateUsed: selectedTemplate.name,
      });
    } catch (error) {
      console.error("Gemini Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8">
      <div className="mt-5 py-6 px-4 bg-black text-white rounded">
        <h2 className="font-medium">{selectedTemplate.name}</h2>
      </div>

      <form action={generateAIContent} className="space-y-6 mt-6">
        {selectedTemplate.form.map((form) => (
          <div key={form.label}>
            <label className="block mb-2">{form.label}</label>
            {form.field === "input" ? (
              <Input name="title" placeholder="Enter title..." required />
            ) : (
              <Textarea
                name="description"
                placeholder="Enter description..."
                required
              />
            )}
          </div>
        ))}

        <Button type="submit" disabled={isLoading}>
          {isLoading ? <Loader className="animate-spin" /> : "Generate Content"}
        </Button>
      </form>

      <div className="my-10">
        <Editor value={isLoading ? "Generating..." : aiOutput} />
      </div>
    </div>
  );
};

export default TemplatePage;

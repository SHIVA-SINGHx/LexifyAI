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
  params: Promise<{ templateSlug: string }>;
}

const TemplatePage = ({ params }: TemplatePageProps) => {
  const resolvedParams = use(params);
  const { templateSlug } = resolvedParams;

  const [isLoading, setIsLoading] = useState(false);
  const [aiOutput, setAIOutput] = useState<string>("");
  const [formData, setFormData] = useState<Record<string, string>>({});

  const selectedTemplate = contentTemplates.find(
    (item) => item.slug === templateSlug
  );

  if (!selectedTemplate) {
    return (
      <div className="p-10">
        <h2 className="text-xl font-bold text-red-600">Template Not Found</h2>
        <p className="text-gray-600">
          The requested template doesn't exist. Please go back to dashboard.
        </p>
      </div>
    );
  }

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateAIContent = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setAIOutput("");

    try {
      // Build prompt from all form fields
      const selectedPrompt = selectedTemplate?.aiPrompt;
      const finalAIPrompt = JSON.stringify(formData) + ", " + selectedPrompt;

      console.log("Sending prompt:", finalAIPrompt);

      const result = await chatSession.sendMessage(finalAIPrompt);
      const generatedText = result.response.text();
      setAIOutput(generatedText);

      // Save to database (optional)
      try {
        const response = await axios.post("/api/save-content", {
          title: formData[selectedTemplate.form[0]?.name || "niche"] || "Untitled",
          description: generatedText,
          templateUsed: selectedTemplate?.name,
        });
        console.log("Saved:", response.data);
      } catch (dbError) {
        console.log("DB save failed (non-critical):", dbError);
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Generation error:", error);
      setAIOutput("Error generating content. Check console.");
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8">
      <div className="mt-5 py-6 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded">
        <h2 className="font-semibold text-lg">{selectedTemplate.name}</h2>
        <p className="text-sm text-blue-100">{selectedTemplate.desc}</p>
      </div>

      <form onSubmit={generateAIContent}>
        <div className="mt-8 bg-white p-6 rounded shadow space-y-6">
          {selectedTemplate.form.map((form) => (
            <div key={form.name || form.label}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {form.label}
              </label>
              {form.field === "input" ? (
                <Input
                  name={form.name || form.label}
                  placeholder={form.label}
                  value={formData[form.name || form.label] || ""}
                  onChange={(e) =>
                    handleInputChange(
                      form.name || form.label,
                      e.target.value
                    )
                  }
                  required={form.required}
                  className="bg-white"
                />
              ) : (
                <Textarea
                  name={form.name || form.label}
                  placeholder={form.label}
                  value={formData[form.name || form.label] || ""}
                  onChange={(e) =>
                    handleInputChange(
                      form.name || form.label,
                      e.target.value
                    )
                  }
                  className="bg-white min-h-[120px]"
                />
              )}
            </div>
          ))}
        </div>

        <Button
          className="mt-5 cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader className="animate-spin mr-2" /> Generating...
            </>
          ) : (
            "Generate Content"
          )}
        </Button>
      </form>

      <div className="my-10">
        <h3 className="text-lg font-semibold mb-2">Generated Content</h3>
        <Editor value={aiOutput} onChange={() => {}} />
      </div>
    </div>
  );
};

export default TemplatePage;
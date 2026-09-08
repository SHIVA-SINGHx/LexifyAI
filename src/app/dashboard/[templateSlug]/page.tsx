"use client";

import { use } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";
import { useState } from "react";
import { chatSession } from "@/lib/gemini-ai";
import { useUser } from "@clerk/nextjs";
import axios from "@/lib/axios";
import { contentTemplates } from "@/lib/content";
import { Editor } from "./components/editor";
import DOMPurify from "dompurify";

interface TemplatePageProps {
  params: Promise<{ templateSlug: string }>;
}

const TemplatePage = ({ params }: TemplatePageProps) => {
  const resolvedParams = use(params);
  const { templateSlug } = resolvedParams;

  const [isLoading, setIsLoading] = useState(false);
  const [aiOutput, setAIOutput] = useState<string>("");
  const [formData, setFormData] = useState<Record<string, string>>({});
  const { isSignedIn, user } = useUser();

  const selectedTemplate = contentTemplates.find(
    (item) => item.slug === templateSlug
  );

  if (!selectedTemplate) {
    return (
      <div className="p-10">
        <h2 className="text-xl font-bold text-red-600">Template Not Found</h2>
        <p className="text-gray-600">
          The requested template does not exist. Please go back to dashboard.
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
      const finalAIPrompt = `${JSON.stringify(formData)}, ${selectedPrompt}

    Return only clean, valid HTML for the editor. Use semantic tags such as <h2>, <h3>, <p>, <strong>, <em>, <ul>, <ol>, and <li>. Do not return Markdown, RTF, JSON, CSS, JavaScript, or code fences. Do not include <html>, <head>, or <body> tags.`;

      console.log("Sending prompt:", finalAIPrompt);

      const result = await chatSession.sendMessage(finalAIPrompt);
      const generatedText = result.response.text();
      const cleanHtml = DOMPurify.sanitize(
        generatedText.replace(/^```(?:html)?\s*/i, "").replace(/\s*```$/i, ""),
        {
          ALLOWED_TAGS: ["h2", "h3", "h4", "p", "strong", "em", "u", "s", "ul", "ol", "li", "br", "a"],
          ALLOWED_ATTR: ["href", "target", "rel"],
        }
      );
      setAIOutput(cleanHtml);

      const saveResult = await axios.post("/api", {
        title: formData[selectedTemplate.form[0]?.name || "title"] || "Untitled",
        description: cleanHtml,
        templateUsed: selectedTemplate.name,
      }, { withCredentials: true });
      console.log("Saved:", saveResult.data);
    } catch (error: unknown) {
      console.error("Generation error:", error);
      const response = (error as { response?: { status?: number; data?: { error?: string } } }).response;
      const serverMessage = response?.data?.error;
      if (response?.status === 401) {
        setAIOutput("You must be signed in to save generated content. Please sign in and try again.");
      } else if (response?.status === 500 && serverMessage) {
        setAIOutput(`Server error: ${serverMessage}`);
      } else {
        setAIOutput("Error generating content. Check console.");
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-4 text-slate-900 dark:text-slate-100 sm:p-8">
      <div className="mt-5 py-6 px-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded">
        <h2 className="font-semibold text-lg">{selectedTemplate.name}</h2>
        <p className="text-sm text-blue-100">{selectedTemplate.desc}</p>
        <p className="text-xs text-blue-100 mt-2">
          {isSignedIn ? `Signed in${user?.primaryEmailAddress ? ` as ${user.primaryEmailAddress.emailAddress}` : ''}` : 'Not signed in'}
        </p>
      </div>

      <form onSubmit={generateAIContent}>
        <div className="mt-8 space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
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

        <div className="flex gap-2 items-center mt-5">
          <Button
            className="cursor-pointer bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
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
          {/* <Button type="button" onClick={checkAuth} variant="outline">
            Check Auth
          </Button> */}

        </div>
      </form>

      <div className="my-10">
        <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Generated Content</h3>
        <Editor value={aiOutput} onChange={() => {}} />
      </div>
    </div>
  );
};

export default TemplatePage;
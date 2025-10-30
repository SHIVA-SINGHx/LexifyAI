"use client"


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contentTemplates } from "@/lib/content";

import { Loader } from "lucide-react";
import React, { useState } from 'react'
import axios from "axios";


interface templateSlugProps {
    templateSlug: string
}

const TemplatePage = ({params}: {params: templateSlugProps}) => {
      const [isLoading, setisLoading] = useState(false);
  const [aiOutput, setAIOutput] = useState<string>("");


const selectedTemplate = contentTemplates.find(
    (item)=>  item.slug === params.templateSlug)

   return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 bg-white rounded">
        <h2 className="font-medium">{selectedTemplate?.name}</h2>
      </div>

<form >
        <div className="flex flex-col gap-4 p-5 mt-5 bg-white">
          {selectedTemplate?.form?.map((form) => (
            <div key={selectedTemplate.slug}>
              <label>{form.label}</label>
              {form.field === "input" ? (
                <div className="mt-5">
                  <Input name="title"></Input>
                </div>
              ) : (
                <div className="mt-5">
                  <Textarea name="description" />
                </div>
              )}
            </div>
          ))}
        </div>
        <Button className="mt-5" type="submit">
          {isLoading ? (
            <Loader className="animate-spin"></Loader>
          ) : (
            "Generate Content"
          )}
        </Button>
      </form>
      <div className="my-10">
       
      </div>
    </div>
  );
}

export default TemplatePage

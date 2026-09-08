"use client"

import React from "react"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "LexifyAI turned a blank page into a week of social content in minutes. The workflow is simple and the results feel genuinely usable.",
    name: "Maya Chen",
    role: "Independent creator",
  },
  {
    quote: "The templates gave our small team a reliable starting point for every campaign. We spend less time staring at drafts and more time refining ideas.",
    name: "Jordan Ellis",
    role: "Content strategist",
  },
  {
    quote: "I can move from an idea to a polished first draft without juggling five different tools. It has become part of my daily writing routine.",
    name: "Avery Morgan",
    role: "Startup founder",
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-slate-50 px-4 py-20 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Loved by creators
          </p>
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            A calmer way to create
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            See how creators use LexifyAI to move from rough ideas to clear, publishable drafts.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-5 flex items-center justify-between">
                <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <div className="flex gap-1 text-amber-400" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="flex-1 text-base leading-7 text-slate-700 dark:text-slate-200">
                “{testimonial.quote}”
              </p>
              <div className="mt-7 border-t border-slate-200 pt-5 dark:border-slate-700">
                <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

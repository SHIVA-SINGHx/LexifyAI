"use client"

import React from 'react'
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, } from 'lucide-react';

const Hero = () => {
  return (
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Now with GPT-4 Integration</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Create Amazing Content
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              In Seconds
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
            Transform your content creation workflow with AI-powered tools. Generate blog posts, social media content, marketing copy, and more in just a few clicks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6">
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-slate-300">
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 text-sm text-slate-500">
            No credit card required • 14-day free trial • Cancel anytime
          </div>
        </div>
      </section>
  )
}

export default Hero

"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Zap, Shield, TrendingUp, } from 'lucide-react';

const Features = () => {
      const features = [
        {
          icon: <Sparkles className="w-6 h-6" />,
          title: "AI-Powered Generation",
          description: "Create high-quality content in seconds with our advanced AI technology."
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Lightning Fast",
          description: "Generate content 10x faster than traditional methods with instant results."
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "SEO Optimized",
          description: "All content is optimized for search engines to boost your visibility."
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Scale Effortlessly",
          description: "From startups to enterprises, our platform grows with your needs."
        }
      ];
  return (
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Everything You Need to Create
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Powerful features designed to help you create better content faster
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Features

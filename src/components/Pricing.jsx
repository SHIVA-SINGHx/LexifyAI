"use client"

import React from 'react'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, } from 'lucide-react';

const Pricing = () => {

      const pricing = [
    {
      name: "Starter",
      price: "$19",
      description: "Perfect for individuals and small projects",
      features: [
        "50,000 words/month",
        "10+ content types",
        "Basic templates",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$39",
      description: "Ideal for growing businesses",
      features: [
        "200,000 words/month",
        "25+ content types",
        "Advanced templates",
        "Priority support",
        "API access",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations",
      features: [
        "Unlimited words",
        "All content types",
        "Custom templates",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced analytics"
      ]
    }
  ];

  return (
      <section id="pricing" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-300">
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-white dark:bg-slate-950 ${plan.popular ? 'border-2 border-blue-500 shadow-xl' : 'border-slate-200 dark:border-slate-700'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-slate-600 dark:text-slate-300">/month</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    className={`w-full mb-6 ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Pricing

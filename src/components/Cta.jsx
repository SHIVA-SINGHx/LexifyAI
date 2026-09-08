"use client"

import React from 'react'
import { Button } from '@/components/ui/button';
import { ArrowRight, } from 'lucide-react';
import Link from 'next/link';

const Cta = () => {
  return (
      <section id="cta" className="bg-linear-to-br from-blue-600 to-purple-600 px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Content?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of content creators who are already using LexifyAI to scale their content production.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-white px-8 py-6 text-lg text-blue-600 hover:bg-slate-100">
              Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
  )
}

export default Cta

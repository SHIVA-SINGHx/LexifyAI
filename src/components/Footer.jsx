"use client"

import React from 'react'
import { Sparkles, } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-purple-600">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">LexifyAI</span>
              </div>
              <p className="text-sm">Create amazing content with the power of AI.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#features" className="transition hover:text-white">Features</Link></li>
                <li><Link href="/#pricing" className="transition hover:text-white">Pricing</Link></li>
                <li><Link href="/#testimonials" className="transition hover:text-white">Testimonials</Link></li>
                <li><Link href="/dashboard" className="transition hover:text-white">AI tools</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#cta" className="transition hover:text-white">About LexifyAI</Link></li>
                <li><Link href="/#features" className="transition hover:text-white">How it works</Link></li>
                <li><a href="mailto:hello@lexifyai.com" className="transition hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:hello@lexifyai.com?subject=Privacy%20question" className="transition hover:text-white">Privacy</a></li>
                <li><a href="mailto:hello@lexifyai.com?subject=Terms%20question" className="transition hover:text-white">Terms</a></li>
                <li><a href="mailto:hello@lexifyai.com?subject=Security%20question" className="transition hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-sm text-center">
            <p>&copy; 2026 LexifyAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer

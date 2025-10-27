"use client"

import React, { useState } from "react";
import { Button } from '@/components/ui/button';
import { Sparkles, Menu, X } from 'lucide-react';
// import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">LexifyAI</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              Testimonials
            </a>
            <Link href='sign-in'>
            <Button variant="outline" className="border-slate-300 cursor-pointer">
              Sign In
            </Button>    
            
            </Link>
        
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#features"
              className="block text-slate-600 hover:text-slate-900"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block text-slate-600 hover:text-slate-900"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="block text-slate-600 hover:text-slate-900"
            >
              Testimonials
            </a>
            <Button variant="outline" className="w-full">
              Sign In
            </Button>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
              Start Free Trial
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

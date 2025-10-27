"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X } from "lucide-react";
import Link from "next/link";
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isSignedIn } = useUser();

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
            {isSignedIn ? (
              <>
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

                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Start Free Trial
                </Button>
              </>
            ) : (
              <>
                <SignInButton>
                  <Button
                    variant={"outline"}
                    className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                  >
                    Sign In
                  </Button>
                </SignInButton>

                <SignUpButton>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Sign Up
                  </Button>
                </SignUpButton>
              </>
            )}
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
          {isSignedIn ? (
            <>
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

                <Link href="sign-up">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant={"outline"}
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  Sign In
                </Button>
              </SignInButton>

            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

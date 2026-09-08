"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X } from "lucide-react";
import Link from "next/link";
import { SignInButton, UserButton, SignOutButton, useUser } from "@clerk/nextjs";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isSignedIn } = useUser();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">LexifyAI</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {isSignedIn ? (
              <>
                <a
                  href="/#features"
                  className="text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                >
                  Features
                </a>
                <a
                  href="/#pricing"
                  className="text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                >
                  Pricing
                </a>
                <a
                  href="/#testimonials"
                  className="text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                >
                  Testimonials
                </a>
                <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer">
                  Start Free Trial
                </Button>
                
                </Link>

                <UserButton />
                <ThemeToggle />
              </>
            ) : (
              <>
                <SignInButton>
                  <Button
                    variant={"outline"}
                    className="border-primary/50 text-primary hover:bg-primary/10 hover:text-black dark:text-white"
                  >
                    Sign In
                  </Button>
                </SignInButton>

                <Link href="/dashboard">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer">
                    Start Free Trial
                  </Button>
                </Link>
                <ThemeToggle />
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
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 md:hidden">
          {isSignedIn ? (
            <div className="px-4 py-4 space-y-3">
          
              <div className="flex items-center justify-between">
                <div>
                  <UserButton />
                </div>
                <div>
                  <SignOutButton>
                    <Button variant="outline" className="ml-2">
                      Sign Out
                    </Button>
                  </SignOutButton>
                </div>
              </div>

              <a
                href="/#features"
                className="block text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                Features
              </a>
              <a
                href="/#pricing"
                className="block text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                Pricing
              </a>
              <a
                  href="/#testimonials"
                className="block text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                Testimonials
              </a>

              <Link href="/dashboard">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 cursor-pointer">
                  Start Free Trial
                </Button>
              </Link>
              <ThemeToggle />
            </div>
          ) : (
            <div className="px-4 py-4">
              <SignInButton>
                <Button
                  variant={"outline"}
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10 w-full"
                >
                  Sign In
                </Button>
              </SignInButton>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

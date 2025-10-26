"use client"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Pricing from "../components/Pricing"
import Cta from "../components/Cta"
import Footer from "../components/Footer"

export default function Home() {


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <Navbar/>
    
      {/* Hero Section */}
      <Hero/>

      {/* Features Section */}
      <Features/>
  
      {/* Pricing Section */}
      <Pricing/>

      {/* CTA Section */}
      <Cta/>

      {/* Footer */}
      <Footer/>

    </div>
  );
};


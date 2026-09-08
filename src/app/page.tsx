import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Pricing from "../components/Pricing"
import Testimonials from "../components/Testimonials"
import Cta from "../components/Cta"
import Footer from "../components/Footer"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"


export default function Home() {
  
  // const {userId} = auth();
  
  // if(userId){
  //   redirect("/dashboard")
  // }


  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <Navbar/>
    
      {/* Hero Section */}
      <Hero/>

      {/* Features Section */}
      <Features/>
  
      {/* Pricing Section */}
      <Pricing/>

      <Testimonials/>

      {/* CTA Section */}
      <Cta/>

      {/* Footer */}
      <Footer/>

    </div>
  );
};


import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Pricing from "../components/Pricing"
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


"use client"

import HeroSection from "@/components/HeroSection"
import Features from "@/components/Features"
import Portfolio from "@/components/Portfolio"
import Education from "@/components/Education"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Brands from "@/components/Brands"
import Testimonial from "@/components/Testimonial"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <div className="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
        <HeroSection />
        {/* <Features /> */}
        <Portfolio />
        <Education />
        <Skills />
        <Experience />
        {/* <Brands /> */}
        {/* <Testimonial /> */}
        {/* <Footer /> */}
      </div>
    </main>
  )
}

// Sticky Scroll Reveal
// Tracing Beam
// Flip Words

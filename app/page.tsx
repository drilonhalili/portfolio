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
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-gray-100 dark:bg-neutral-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:10px_18px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_10%,transparent_90%)]"></div>
        </div>
      </div>
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

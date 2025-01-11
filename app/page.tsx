"use client"

import HeroSection from "@/components/HeroSection"
import Portfolio from "@/components/Portfolio"
import Education from "@/components/Education"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"

export default function Home() {
  return (
    <main>
      <div className="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
        <HeroSection />
        <Portfolio />
        <Education />
        <Skills />
        <Experience />
      </div>
    </main>
  )
}

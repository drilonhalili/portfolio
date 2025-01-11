"use client"

import HeroSection from "@/src/app/components/HeroSection"
import Portfolio from "@/src/app/components/Portfolio"
import Education from "@/src/app/components/Education"
import Skills from "@/src/app/components/Skills"
import Experience from "@/src/app/components/Experience"

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

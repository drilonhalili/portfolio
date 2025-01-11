"use client"

import { TypewriterEffectSmooth } from "./ui/TypewriterEffect"

const words = [
  {
    text: "Your"
  },
  {
    text: "skills"
  },
  {
    text: "are"
  },
  {
    text: "more"
  },
  {
    text: "than"
  },
  {
    text: "just"
  },
  {
    text: "numbers!",
    className: "text-blue-500 dark:text-blue-500"
  }
]

export default function Skills() {
  return (
    <section>
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <h2 className="font-normal text-center text-gray-300 text-3xl md:text-6xl lg:text-7xl">
            <TypewriterEffectSmooth words={words} className="justify-center" />
          </h2>
        </div>
      </div>
    </section>
  )
}

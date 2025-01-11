"use client"

import Image from "next/image";
import Link from "next/link";


import { ModeToggle } from "./ui/ModeToggle";
import { Button } from "./ui/Button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between mb-24">
      <Image
        className="hidden dark:block"
        src="/assets/image/white-logo.png"
        alt="Logo"
        width={61}
        height={41}
      />
      <Image
        className="block dark:hidden"
        src="/assets/image/logo.png"
        alt="Logo"
        width={61}
        height={41}
      />
      <div className="flex gap-4">
        <ModeToggle />
        <Button
          className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500"
          asChild
        >
          <Link href="/assets/doc/cv.pdf" download="cv.pdf">
            Get my CV
          </Link>
        </Button>
      </div>
    </nav>
  )
}

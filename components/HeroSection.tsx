import Image from "next/image";
import Link from "next/link";

import Navbar from "./Navbar";

import { Instagram, Linkedin, Github, Facebook, Twitter, Mail  } from "lucide-react";

const socialLinks = [
  {
    icon: <Instagram size={32} />,
    name: "Instagram",
    url: "https://www.instagram.com/drilon.halili/"
  },
  {
    icon: <Linkedin size={32} />,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/drilonhalili/"
  },
  {
    icon: <Github size={32} />,
    name: "Github",
    url: "https://github.com/drilonhalili"
  },
  {
    icon: <Twitter size={32} />,
    name: "Twitter",
    url: "https://x.com/drilonhalili12"
  },
  {
    icon: <Facebook size={32} />,
    name: "Facebook",
    url: "https://www.facebook.com/drilon.halili"
  },
  {
    icon: <Mail size={32} />,
    name: "Mail",
    url: "mailto:drilon.halili@gmail.com"
  }
]

export default function HeroSection() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <Navbar />
        <div className="text-center">
          <div className="flex justify-center mb-16">
            <Image
              src="/assets/image/me.png"
              alt="Image"
              width={262}
              height={262}
              className="rounded-full"
            />
          </div>
          <h6 className="font-medium text-black dark:text-white text-lg md:text-2xl uppercase mb-8">
            Drilon Halili
          </h6>
          <h2 className="font-normal text-gray-900 dark:text-gray-200 text-4xl md:text-7xl leading-none mb-8">
            Senior Frontend Developer
          </h2>
          <p className="font-normal text-gray-600 dark:text-gray-200 text-md md:text-xl mb-16">
            My goal is to create software that serves users effectively,
            providing powerful, user-friendly tools that enhance efficiency and
            ease of use.
          </p>
          <div className="flex justify-center items-center gap-8 m-auto">
            {socialLinks.map((item, index) => (
              <ul key={index}>
                <li>
                  <Link href={item.url} aria-label={item.name}>
                    {item.icon}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

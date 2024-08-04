const projects = [
  {
    number: "01",
    title: "Restaurant menus",
    description:
      "A multi-tenant web application with individual dashboards for each client, designed for managing restaurant menus. Built with React and Vite, Bun, Hono, Drizzle, Neon, Kinde, TanStack, Tailwind CSS, TypeScript, RPC, and Zod. This project provides a scalable and secure solution, offering an intuitive interface for efficient menu management across multiple restaurants.",
    link: "https://demo.coonwerks.com"
  },
  {
    number: "02",
    title: "Business Health UK",
    description:
      "A single landing page designed to assess and improve business health, built with Next.js, Tailwind CSS, email.js, react-hook-form, Resend, Zod, and TypeScript. This project offers a clean and intuitive interface, facilitating seamless communication and efficient data handling for business assessments.",
    link: "https://businesshealth.co.uk/"
  },
  {
    number: "03",
    title: "My Portfolio",
    description:
      "A personal showcase built with Next.js, Framer Motion, TailwindCSS, TypeScript, and tailwindcss-animate. This project highlights my skills and the diverse range of projects I've developed, offering a seamless and visually engaging user experience through smooth animations and modern design principles.",
    link: "https://drilonhalili.com"
  }
]

interface PortfolioItemProps {
  number: string
  title: string,
  description: string
  link: string
}

function PortfolioItem({
  number,
  title,
  description,
  link
}: PortfolioItemProps) {
  return (
    <div className="flex space-x-6">
      <span className="font-normal text-gray-700 dark:text-gray-100 text-3xl md:text-4xl">
        {number}
      </span>
      <span className="w-28 h-0.5 bg-gray-300 dark:bg-gray-800 mt-5"></span>
      <div className="w-full">
        <h2 className="font-normal text-gray-700 dark:text-gray-100 text-3xl md:text-4xl mb-5">
          {title}
        </h2>
        <p className="font-normal text-gray-500 dark:text-gray-300 text-sm md:text-base">
          {description}
        </p>
        <h6 className="font-semibold text-gray-500 dark:text-gray-100 text-md relative z-10 mt-3 cursor-pointer">
          <a href={link} target="_blank" rel="noopener noreferrer">
            See the project here
          </a>
        </h6>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-20">
          <div className="mb-10 lg:mb-0">
            <h1 className="font-medium text-gray-700 dark:text-gray-100 text-3xl md:text-4xl mb-5">
              Portfolio
            </h1>
            <p className="font-normal text-gray-500 dark:text-gray-300 text-xs md:text-base">
              I have brought here my biggest and favorite works as a
              professional.
            </p>
          </div>
          <div className="space-y-24 w-full">
            {projects.map((item, index) => (
              <PortfolioItem
                key={index}
                number={item.number}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

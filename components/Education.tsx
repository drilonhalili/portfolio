const educationItem = [
  {
    year: "Oct 2011 - Feb 2014",
    description:
      "Bachelor of Business Administration (B.B.A.) - Accounting and Finance",
    link: "#"
  },
  {
    year: "Feb 2021 - Seb 2021",
    description: "Certified Frontend Developer - Code Academy - Skopje",
    link: "https://example.com"
  },
]

interface EducationItemProps {
  year: string;
  description: string;
  link: string;
}

function EducationItem({ year, description, link }: EducationItemProps) {
  return (
    <div className="flex flex-col bg-gray-50 dark:bg-gray-800 px-8 py-10 rounded-md">
      <h4 className="font-medium text-gray-700 dark:text-gray-100 text-lg mb-4">
        {year}
      </h4>
      <p className="flex-1 font-normal text-gray-500 dark:text-gray-300 text-md mb-4">
        {description}
      </p>
    </div>
  )
}

export default function Education() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 dark:text-gray-100 text-3xl md:text-4xl mb-5">
          Education
        </h1>
        <p className="font-normal text-gray-500 dark:text-gray-300 text-xs md:text-base mb-8">
          Summary of my educational background
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationItem.map((item, index) => (
            <EducationItem
              key={index}
              year={item.year}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

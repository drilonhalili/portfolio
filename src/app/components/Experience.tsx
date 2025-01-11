import { ExternalLink } from "lucide-react"

function calculateExperience() {
  const startDate = new Date("June 2022")
  const currentDate = new Date()

  let years = currentDate.getFullYear() - startDate.getFullYear()
  let months = currentDate.getMonth() - startDate.getMonth()

  if (months < 0) {
    years--
    months += 12
  }

  return {
    years,
    months
  }
}

const experienceDuration = calculateExperience()

const experience = [
  {
    title: "Software Developer",
    company: "Enterprise Alumni",
    year: `Jun 2022 - Present · ${experienceDuration.years} yrs ${experienceDuration.months} months`,
    description:
      "Working as a React Developer for a project that provides a video-chat by connecting the customer with the client.",
    url: "https://enterprisealumni.com"
  },
  {
    title: "Frontend Developer",
    company: "FreelanceFreelance",
    year: "May 2021 - Jun 2022 · 1 yrs 1 month",
    description:
      "Working as a React Developer for a project that provides a video-chat by connecting the customer with the client.",
    url: "https://freelancer.com"
  },
  {
    title: "Web Developer",
    company: "SLS Solutions",
    year: "Jun 2019 - May 2021 · 2 yrs",
    description:
      "Developed several websites using HTML, CSS, JS and WordPress on the freelancing regime",
    url: "https://slssolutions.com"
  },
  {
    title: "Stock Management - United Nation “MINUSCA”",
    company: "Ecolog International",
    year: "Jun 2016 - Jun 2019 · 3 yrs 2 months",
    description:
      "Ready to organize the team and be responsible for the day operations of the warehouse and department. Records purchases, maintains database, performs physical count of inventory, and reconciles actual stock count to computer-generated reports, Coordinating the shipment of goods from the warehouse. Working with Operations Manager to provide financial analysis, forecasting, assistance with budget preparation, cost control and performance to budget, maintain budget file.",
    url: "https://ecolog-international.com"
  },
  {
    title: "Web Developer",
    company: "SLS Solutions",
    year: "Jul 2014 - Jun 2016 · 2 yrs",
    description: "Developed several websites using HTML, CSS and Wordpress",
    url: "https://slssolutions.com"
  }
]

export default function Experience() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="font-medium text-gray-700 dark:text-gray-100 text-3xl md:text-4xl mb-5">
          Experience
        </h2>
        <p className="font-normal text-gray-500 dark:text-gray-300 text-xs md:text-base mb-8">
          Summary of my experience background
        </p>
        <div className="flex flex-col lg:flex-row justify-between">
          <table className="w-full">
            <thead className="border-b border-gray-200">
              <tr>
                <th
                  scope="col"
                  className="font-medium text-left p-2 text-gray-600 dark:text-gray-200 text-base uppercase"
                >
                  Company
                </th>
                <th
                  scope="col"
                  className="font-medium text-left p-2 text-gray-600 dark:text-gray-200 text-base uppercase"
                >
                  Position
                </th>
                <th
                  scope="col"
                  className="font-medium text-left p-2 text-gray-600 dark:text-gray-200 text-base uppercase"
                >
                  Year
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {experience.map((item, index) => (
                <tr key={index}>
                  <td className="font-semibold p-2 text-gray-600 dark:text-gray-100 text-base inline-flex">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.company + " open in new tab"}
                    >
                      {item.company}
                    </a>
                    <ExternalLink className="pl-2" />
                  </td>
                  <td className="font-normal p-2 text-gray-600 dark:text-gray-200 text-base">
                    {item.title}
                  </td>
                  <td className="font-normal p-2 text-gray-600 dark:text-gray-200 text-base">
                    {item.year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

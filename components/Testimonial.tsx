const testimonials = [
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Stephan Clark",
    position: "CEO at EarlyBird"
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Stephan Clark",
    position: "CEO at EarlyBird"
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Stephan Clark",
    position: "CEO at EarlyBird"
  }
]

interface TestimonialProps {
  content: string
  author: string
  position: string
}

const TestimonialItem: React.FC<TestimonialProps> = ({
  content,
  author,
  position
}) => {
  return (
    <div className="bg-gray-50 px-8 py-10 rounded-md">
      <p className="font-normal text-gray-500 text-md mb-4">{content}</p>
      <h6 className="font-semibold text-gray-500 text-md">
        {author}{" "}
        <span className="font-medium text-gray-300 text-sm">- {position}</span>
      </h6>
    </div>
  )
}

export default function Testimonial() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
          Testimonial
        </h1>
        <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">
          Below is a summary of the places I studied
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialItem
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              position={testimonial.position}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

import { render, screen } from "@testing-library/react"
import Navbar from "../../components/Navbar"

describe("Navbar", () => {
  it("renders the dark mode logo when in dark mode", () => {
    render(<Navbar />)
    const darkLogo = screen.getByAltText("Logo")
    expect(darkLogo).toBeInTheDocument()
  })

  it("renders the light mode logo when not in dark mode", () => {
    render(<Navbar />)
    const lightLogo = screen.getByAltText("Logo")
    expect(lightLogo).toBeInTheDocument()
  })

  it("renders the mode toggle button", () => {
    render(<Navbar />)
    const toggleButton = screen.getByRole("button", { name: /toggle theme/i })
    expect(toggleButton).toBeInTheDocument()
  })

  it("renders the CV download button", () => {
    render(<Navbar />)
    const cvButton = screen.getByRole("link", { name: /get my cv/i })
    expect(cvButton).toBeInTheDocument()
  })
})

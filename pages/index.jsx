import { useState } from "react"
import {
  Hero,
  Services,
  Testimonials,
  Contact,
  Footer,
  Navigation,
  NavigationMobile,
} from "../components"

const Home = () => {
  const [clicked, setClicked] = useState(false)
  const toggleMenu = () => setClicked(!clicked)
  const closeMenu = () => setClicked(false)

  return (
    <div style={{ position: "relative" }}>
      <Navigation toggleMenu={toggleMenu} />
      <NavigationMobile clicked={clicked} closeMenu={closeMenu} />
      <Hero />
      <Services as="section" id="services">
        <h1>Our Service</h1>
      </Services>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home

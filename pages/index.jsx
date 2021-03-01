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
    <div>
      <Navigation toggleMenu={toggleMenu} />
      <NavigationMobile clicked={clicked} closeMenu={closeMenu} />
      <main>
        <Hero />
        <Services as="section" id="services" />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home

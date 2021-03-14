import { useState } from "react"
import {
  Hero,
  Services,
  Testimonials,
  Contact,
  Footer,
  Navigation,
} from "../components"
import { Global } from "@emotion/react"
import { globalStyles } from "../styles"

const Home = () => {
  const [clicked, setClicked] = useState(false)

  return (
    <div>
      <Global styles={globalStyles(clicked)} />
      <Navigation setClicked={setClicked} clicked={clicked} />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home

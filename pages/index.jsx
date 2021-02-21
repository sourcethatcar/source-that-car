import { Hero, Services, Testimonials, Contact, Footer } from "../components"

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
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

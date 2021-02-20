import { Hero, Services, Testimonials, Contact, Footer } from "../components"

const Home = () => {
  return (
    <>
      <Hero />
      <Services as="section" id="services">
        <h1>Our Service</h1>
      </Services>
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default Home

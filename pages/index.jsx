import {
  Hero,
  Services,
  Testimonials,
  Contact,
  Footer,
  Navigation,
} from "../components"

const Home = () => {
  return (
    <div>
      <Navigation />
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

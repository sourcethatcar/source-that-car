import {
  Hero,
  Services,
  Testimonials,
  Contact,
  Footer,
  About,
} from "../components"

const App = () => {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

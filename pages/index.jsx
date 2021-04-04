import {
  Hero,
  Services,
  Testimonials,
  Contact,
  Footer,
  Navigation,
  About,
} from "../components"

const App = () => {
  return (
    <div>
      {/* <Navigation /> */}
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

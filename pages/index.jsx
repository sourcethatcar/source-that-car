import {
  Hero,
  Services,
  Testimonials,
  Contact,
  Footer,
  Navigation,
} from "../components"

const App = () => {
  return (
    <div>
      <Navigation />
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

export default App

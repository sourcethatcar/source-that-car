import PropTypes from "prop-types"
import notion from "../lib/api/notion"
import {
  Hero,
  Services,
  Testimonials,
  Contact,
  Footer,
  Stock,
  About,
} from "../components"

const App = ({ stock, testimonials }) => {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Stock stock={stock} />
        <Services />
        <Testimonials testimonials={testimonials} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
App.propTypes = {
  stock: PropTypes.array.isRequired,
  testimonials: PropTypes.array.isRequired,
}

export async function getServerSideProps(ctx) {
  const stock = await notion.getStock()
  const testimonials = await notion.getTestimonials()

  if (!stock || !testimonials) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      stock,
      testimonials,
    },
  }
}

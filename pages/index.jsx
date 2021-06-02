import PropTypes from "prop-types"
import { getStock } from "../lib/api/notion"
import {
  Hero,
  Services,
  Testimonials,
  Contact,
  Footer,
  Stock,
  About,
} from "../components"

const App = ({ stock }) => {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Stock stock={stock} />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
App.propTypes = {
  stock: PropTypes.array.isRequired,
}

export async function getServerSideProps(ctx) {
  const stock = await getStock()

  if (!stock) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      stock,
    },
  }
}

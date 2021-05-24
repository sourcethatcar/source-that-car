import { getStock } from "../lib/api/notion"
import {
  Hero,
  Services,
  Testimonials,
  Contact,
  Footer,
  About,
  Stock,
} from "../components"

const App = (data) => {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Services />
        <Stock data={data} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

export async function getServerSideProps(ctx) {
  const data = await getStock()
  console.log(data)

  if (!data) {
    console.log("ERROR")
  }
  return data
}

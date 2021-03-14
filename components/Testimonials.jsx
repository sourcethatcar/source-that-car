import styled from "@emotion/styled"
import { Layout, Slider } from "../components"
import testimonials from "../utils/testimonials"

const TestimonialsWrapper = styled.section`
  background-color: var(--colorGrey);
  width: 100%;
  .testimonials-layout {
    h1 {
      padding: 3rem 0;
    }
  }
`
export const Testimonials = () => {
  return (
    <TestimonialsWrapper id="testimonials">
      <Layout className="testimonials-layout">
        <h1>Testimonials</h1>
        <Slider slides={testimonials} />
      </Layout>
    </TestimonialsWrapper>
  )
}

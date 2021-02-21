import styled from "@emotion/styled"
import { Layout } from "./Layout"

const TestimonialsWrapper = styled.section`
  background-color: var(--colorGrey);
`
export const Testimonials = () => {
  return (
    <TestimonialsWrapper id="testimonials">
      <Layout>
        <h1>Testimonials</h1>
      </Layout>
    </TestimonialsWrapper>
  )
}

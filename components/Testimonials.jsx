import styled from "@emotion/styled"
import { Layout } from "./Layout"

const TestimonialsWrapper = styled(Layout)`
  background-color: var(--colorGrey);
`
export const Testimonials = () => {
  return (
    <TestimonialsWrapper as="section" id="testimonials">
      <div>
        <h1>Testimonials</h1>
      </div>
    </TestimonialsWrapper>
  )
}

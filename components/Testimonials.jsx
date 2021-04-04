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
    & > p {
      font-size: 0.875rem;
      font-style: italic;
      text-align: center;
      span {
        font-weight: bold;
      }
    }
  }
`
export const Testimonials = () => {
  return (
    <TestimonialsWrapper id="testimonials">
      <Layout className="testimonials-layout" style={{ paddingBottom: "3rem" }}>
        <h1>Feedback</h1>
        <p>
          We are <span>very</span> proud of the relationship we have with our
          clients and are fortunate to have many repeat and referral business
          opportunities.
        </p>
        <Slider slides={testimonials} />
      </Layout>
    </TestimonialsWrapper>
  )
}

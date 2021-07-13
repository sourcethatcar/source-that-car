import styled from "@emotion/styled"
import { Layout, Slider } from "../components"
import TrustPilot from "./icons/TrustPilot"
import PropTypes from "prop-types"

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
      a {
        color: var(--colorYellow);
        svg {
          display: inline-block;
          height: 0.875rem;
          width: 0.875rem;
          fill: var(--colorYellow);
        }
      }
    }
  }
`
export const Testimonials = ({ testimonials }) => {
  return (
    <TestimonialsWrapper id="testimonials">
      <Layout className="testimonials-layout" style={{ paddingBottom: "3rem" }}>
        <h1>Feedback</h1>
        <p style={{ paddingBottom: "1rem" }}>
          We are <span>very</span> proud of the relationship we have with our
          clients and are fortunate to have many repeat and referral business
          opportunities.
        </p>
        <Slider slides={testimonials} />
        <p style={{ paddingTop: "1rem" }}>
          If you are a previous client, we would be grateful if you could leave
          us a review on our{" "}
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://uk.trustpilot.com/review/sourcethatcar.com"
            >
              <TrustPilot /> Trustpilot
            </a>
          </span>{" "}
          page.
        </p>
      </Layout>
    </TestimonialsWrapper>
  )
}

Testimonials.propTypes = {
  testimonials: PropTypes.array.isRequired,
}

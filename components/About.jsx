import styled from "@emotion/styled"
import { Layout } from "../components"
import { breakpoints } from "../styles"

const AboutWrapper = styled.section`
  background-color: var(--colorGrey);
  .section-title {
    padding: 3rem 0;
  }
  .background-image {
    background-image: url("images/family.jpg");
    background-position: center;
    background-size: cover;
  }
  .aboutus-item-content {
    background-color: var(--colorWhite);
    padding: 1rem;
  }
  .one {
    border-radius: 5px 5px 0px 0px;
  }
  .three {
    border-radius: 0px 0px 5px 5px;
  }
  .aboutus-content-container {
    display: grid;
    max-width: 300px;
    margin: 0 auto;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    padding-bottom: 3rem;
    h3 {
      padding: 1rem 0;
      color: var(--colorYellow);
      text-align: center;
    }
    p {
      padding: 1rem;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.75rem;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  @media only screen and (min-width: ${breakpoints.tablet}) {
    .aboutus-content-container {
      max-width: 500px;
    }
    .one {
      border-radius: 5px 0px 0px 5px;
    }
    .three {
      border-radius: 0px 5px 5px 0px;
    }
  }
  @media only screen and (min-width: ${breakpoints.desktop}) {
    .aboutus-content-container {
      max-width: 100%;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
    }
  }
`

export const About = () => {
  return (
    <AboutWrapper id="about">
      <Layout>
        <div className="section-title">
          <h1>About Us</h1>
        </div>
        <div className="aboutus-content-container">
          <div className="aboutus-item-content one">
            <h3>Over 30 Years Experience</h3>
            <p>
              Michael Barter is the founding partner and has over 30 years’
              experience within the automotive industry.
            </p>
            <p>
              Sourcethatcar is an established business with a wealth of motor
              industry knowledge, ensuring that not only do we get you the right
              car but also at the possible best price.{" "}
            </p>
            <p> We pride ourselves on getting the job done right every time.</p>
          </div>
          <div
            className="aboutus-item-content background-image"
            style={{ backgroundColor: "lightgreen" }}
          ></div>
          <div className="aboutus-item-content three">
            <h3>Family Run Business</h3>
            <p>
              Sourcethatcar is a family-run business that finds the vehicle you
              want. We are based in Tonbridge, Kent in the South East of
              England.
            </p>
            <p>
              Not only do we supply new and used vehicles, but also, we can
              part-exchange your current vehicle to eliminate all the hassle and
              pressure for you.
            </p>
          </div>
        </div>
      </Layout>
    </AboutWrapper>
  )
}

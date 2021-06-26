import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { Layout } from "./Layout"
import { breakpoints } from "../styles"
import { FaAward, FaUsers } from "react-icons/fa"

const ServicesWrapper = styled.section`
  background-color: var(--colorWhite);
  .description-container {
    padding: 1rem 0;
    display: grid;
    column-gap: 6rem;
    row-gap: 5rem;
    grid-template-columns: repeat(1, minmax(100px, 300px));
    justify-content: center;
    a {
      color: var(--colorYellow);
      font-weight: bold;
    }
  }
  .description-item {
    max-width: 350px;
    justify-self: center;
  }

  .description-title-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* background-color: lightgreen; */
  }

  .services-container {
    padding: 3rem 0;
  }

  .services-container {
    h1 {
      padding-bottom: 1rem;
    }
  }

  .description-title {
    padding: 1rem 0;
  }

  .icon-container {
    padding-right: 1rem;
    svg {
      width: 2rem;
      height: 2rem;
      fill: var(--colorYellow);
    }
  }

  .description-text {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: 0em;
    text-align: left;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    .description-container {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      grid-column-gap: 3rem;
    }
  }
`

const Description = ({ children, title, icon }) => {
  return (
    <div className="description-item">
      <div className="description-title-container">
        <div className="icon-container">{icon}</div>
        <h3 className="description-title">{title}</h3>
      </div>
      <p className="description-text">{children}</p>
    </div>
  )
}

Description.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
}

export const About = () => {
  return (
    <ServicesWrapper id="about">
      <Layout className="services-layout">
        <div className="services-container">
          <h1>About Us</h1>
          <div className="description-container">
            <Description title="We Get the Job Done Right" icon={<FaAward />}>
              <a href="https://www.linkedin.com/in/mike-barter-sourcethatcar-b42a8229/">
                Michael Barter
              </a>
              , our founding partner, has over 30 years of knowledge and
              experience within the automotive industry. This not only ensures
              that we get you the right car but also at the possible best price.
            </Description>
            <Description title="Family Run Business" icon={<FaUsers />}>
              We are based in Tonbridge, Kent. Not only do we supply new and
              used vehicles, but also, we can part-exchange your current vehicle
              to eliminate all the hassle and pressure for you.
            </Description>
            {/* <Description title="New Cars" icon={<FaGift />}>
              All cars are HPI checked, sourced from a UK dealer, and come with
              a full manufacturers’ warranty and roadside assistance. In the
              event of a warranty claim, any authorised dealership throughout
              the UK can help.
            </Description> */}
            {/* <Description title="Pre-owned Cars" icon={<FaHeart />}>
              Furthermore, used cars are supplied with a ‘Warrantywise’ warranty
              and in the unlikely event of a claim any work can be carried out
              by your local service centre
            </Description> */}
          </div>
        </div>
      </Layout>
    </ServicesWrapper>
  )
}

import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { Layout } from "./Layout"
import { breakpoints } from "../styles"
import { FaCarSide, FaHandshake, FaGift, FaHeart } from "react-icons/fa"

const ServicesWrapper = styled.section`
  background-color: var(--colorWhite);
  .description-container {
    padding: 1rem 0;
    display: grid;
    column-gap: 6rem;
    row-gap: 5rem;
    grid-template-columns: repeat(1, minmax(100px, 300px));
    justify-content: center;
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
      grid-template-rows: 1fr 1fr;
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
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
}

export const Services = () => {
  return (
    <ServicesWrapper id="services">
      <Layout className="services-layout">
        <div className="services-container">
          <h1>Our Service</h1>
          <div className="description-container">
            <Description title="Bespoke Service" icon={<FaHandshake />}>
              Sourcethatcar provides a bespoke service sourcing new and used
              cars at a competitive price, removing the time and hassle out of
              searching for your new or used car.
            </Description>
            <Description title="Your Choice, Your Car" icon={<FaCarSide />}>
              Let us know the manufacturer, model and specification of the car
              you want, then sit back and relax - we will do the rest!
              Alternatively, if you are unsure, we can discuss and advise
              various options with you .
            </Description>
            <Description title="New Cars" icon={<FaGift />}>
              All of our new cars are sourced only through UK dealers, and come
              with a full manufacturers’ warranty and roadside assistance. In
              the event of a warranty claim, any authorised dealership
              throughout the UK can help.
            </Description>
            <Description title="Pre-owned Cars" icon={<FaHeart />}>
              All Pre-owned cars are fully HPI checked, have a comprehensive
              service history & have at least 6 months MOT. Furthermore, our
              used cars are supplied with a Warrantywise Used Car warranty and
              in the unlikely event of a claim, any work can be carried out by a
              local authorised service center.
            </Description>
          </div>
        </div>
      </Layout>
    </ServicesWrapper>
  )
}

import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { Layout } from "./Layout"
import { breakpoints } from "../styles"
import { FaCarSide, FaMoneyBillAlt, FaHandshake } from "react-icons/fa"

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
    max-width: 300px;
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
    padding-top: 2rem;
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
      grid-template-columns: repeat(2, minmax(100px, 300px));
    }
  }
  @media only screen and (min-width: ${breakpoints.tablet}) {
    .description-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

const Description = ({ children, title, icon }) => {
  return (
    <div className="description-item">
      <div className="icon-container">{icon}</div>
      <h3 className="description-title">{title}</h3>
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
            <Description
              title="Your Choice, Your Car"
              icon={<FaCarSide fill="#fca311" size="32px" />}
            >
              We’re a family-run company based in Kent, UK with strong
              relationships with local dealerships, built up over many years.
              This means that we’re able to source your next new or used
              vehicle, often with large discounts as compared to dealership
              prices.
            </Description>
            <Description
              title="Financing"
              icon={<FaMoneyBillAlt fill="#fca311" size="32px" />}
            >
              We have a variety of financing options available for you to choose
              from, at competitive rates. Part exchange of your current vehicle
              can also be handled by us making your next purchase experience a
              breeze!
            </Description>
            <Description
              title="Bespoke Service"
              icon={<FaHandshake fill="#fca311" size="32px" />}
            >
              Your requirements are at the core of the service that we provide.
              We work directly with you to determine the next car of yor dreams,
              and then we leverage our partner network to find it at the best
              price possible. We do the hard work, so that you don’t have to.
            </Description>
          </div>
        </div>
      </Layout>
    </ServicesWrapper>
  )
}

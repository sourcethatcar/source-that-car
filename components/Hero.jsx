import styled from "@emotion/styled"
import { Layout } from "./index"
import { breakpoints } from "../styles"
import { BsChevronDown } from "react-icons/bs"
import { SiTwitter, SiFacebook, SiInstagram } from "react-icons/si"

const HeroWrapper = styled.section`
  height: 100vh;
  width: 100%;

  .hero-background-image {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -10;
    object-fit: cover;
    filter: brightness(75%);
  }

  .headline-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      color: var(--colorWhite);
      padding: 1rem 0;
      border-radius: 5px;
      font-weight: 500;
      font-size: 3rem;
      text-align: center;
      font-style: italic;
      text-transform: capitalize;
      opacity: 0.9;
    }

    h3 {
      color: var(--colorWhite);
    }
  }
  @media only screen and (min-width: ${breakpoints.tablet}) {
    .headline-container h1 {
      font-size: 4rem;
    }
  }

  @media only screen and (min-width: ${breakpoints.desktop}) {
    .headline-container {
      align-items: flex-end;
      h1 {
        font-size: 5rem;
      }
    }
  }

  .social-icons-container {
    display: flex;
    padding: 1rem 0;

    a {
      padding: 0 1rem;

      svg {
        width: 2rem;
        height: 2rem;
        fill: var(--colorYellow);
      }
    }
  }

  .hero-arrow {
    position: absolute;
    bottom: 0;
    padding: 1rem 0;
    right: 50%;
    width: 6rem;
    height: 6rem;
  }

  @keyframes pulse_animation {
    0% {
      transform: scale(1) translateX(50%);
    }
    30% {
      transform: scale(1) translateX(50%);
    }
    40% {
      transform: scale(1.08) translateX(50%);
    }
    50% {
      transform: scale(1) translateX(50%);
    }
    60% {
      transform: scale(1) translateX(50%);
    }
    70% {
      transform: scale(1.05) translateX(50%);
    }
    80% {
      transform: scale(1) translateX(50%);
    }
    100% {
      transform: scale(1) translateX(50%);
    }
  }

  .pulse {
    animation-name: pulse_animation;
    animation-duration: 5000ms;
    transform-origin: 70% 70%;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`
export const Hero = () => {
  return (
    <HeroWrapper as="section" id="hero">
      <picture>
        <source
          srcSet="/images/vw-mobile.jpg"
          media={`(max-width: ${breakpoints.desktop})`}
        />
        <source srcSet="/images/vw-desktop.jpg" />
        <img
          className="hero-background-image"
          src="/images/vw-desktop.jpg"
          alt="hero-car"
        />
      </picture>
      <Layout className="headline-container">
        <h1>Source That Car</h1>
        <div className="social-icons-container">
          <a href="https://www.twitter.com">
            <SiTwitter />
          </a>
          <a href="https://www.google.com">
            <SiInstagram />
          </a>
          <a href="https://www.google.com">
            <SiFacebook />
          </a>
        </div>
      </Layout>
      <BsChevronDown fill="white" className="pulse hero-arrow" />
    </HeroWrapper>
  )
}

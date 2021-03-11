import styled from "@emotion/styled"
import { Layout } from "./index"

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
  }

  .headline-container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      color: var(--colorWhite);
      background-color: var(--colorYellow);
      padding: 1rem;
      border-radius: 5px;
      font-weight: bold;
      text-align: center;
      font-style: italic;
      text-transform: uppercase;
      opacity: 0.9;
    }
  }
`
export const Hero = () => {
  return (
    <HeroWrapper as="section" id="hero">
      <img
        className="hero-background-image"
        src="/images/mercedes.jpg"
        alt="hero-car"
      />
      <Layout className="headline-container">
        <h1>Where will your next adventure take you?</h1>
      </Layout>
    </HeroWrapper>
  )
}

import styled from "@emotion/styled"
import { Layout, Navigation } from "./index"

const HeroWrapper = styled.section`
  height: 100vh;
  /* position: relative; */
  background-image: url("/images/mercedes.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

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
      <Navigation />
      <Layout className="headline-container">
        <h1>Where will your next adventure take you?</h1>
      </Layout>
    </HeroWrapper>
  )
}

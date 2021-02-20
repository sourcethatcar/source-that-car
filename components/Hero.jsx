import styled from "@emotion/styled"
import { Layout } from "./Layout"

const HeroWrapper = styled(Layout)`
  height: 100vh;
  background-image: url("/images/mercedes.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    color: blue;
  }
`
export const Hero = () => {
  return (
    <HeroWrapper as="section" id="hero">
      <div>
        <h1>Full Viewport Image with Headline</h1>
      </div>
    </HeroWrapper>
  )
}

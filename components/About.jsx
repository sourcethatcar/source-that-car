import styled from "@emotion/styled"
import { Layout } from "../components"

const AboutWrapper = styled.section`
  background-color: var(--colorGrey);
  .section-title {
    padding: 3rem 0;
  }
`

export const About = () => {
  return (
    <AboutWrapper id="about">
      <Layout>
        <div className="section-title">
          <h1>About Us</h1>
        </div>
      </Layout>
    </AboutWrapper>
  )
}

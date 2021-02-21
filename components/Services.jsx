import styled from "@emotion/styled"
import { Layout } from "./Layout"

const ServicesWrapper = styled.section`
  background-color: var(--colorWhite);
`

export const Services = () => {
  return (
    <ServicesWrapper id="services">
      <Layout>
        <h1>Our Services</h1>
      </Layout>
    </ServicesWrapper>
  )
}

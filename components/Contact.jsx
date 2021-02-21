import styled from "@emotion/styled"
import { Layout } from "./Layout"

const ContactWrapper = styled.section`
  background-color: var(--colorWhite);
`
export const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <Layout>
        <h1>Contact</h1>
      </Layout>
    </ContactWrapper>
  )
}

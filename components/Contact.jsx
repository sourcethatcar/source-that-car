import styled from "@emotion/styled"
import { Layout } from "./Layout"

const ContactWrapper = styled(Layout)`
  background-color: var(--colorWhite);
`
export const Contact = () => {
  return (
    <ContactWrapper as="section" id="contact">
      <div>
        <h1>Contact</h1>
      </div>
    </ContactWrapper>
  )
}

import styled from "@emotion/styled"
import { Layout } from "./Layout"

const FooterWrapper = styled.footer`
  height: 100px;
  color: var(--colorWhite);
  background-color: var(--colorBlue);
`
export const Footer = () => {
  return (
    <FooterWrapper id="footer" as="footer">
      <Layout>
        <h1>Footer</h1>
      </Layout>
    </FooterWrapper>
  )
}

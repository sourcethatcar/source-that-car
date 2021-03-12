import styled from "@emotion/styled"
import { breakpoints } from "../styles/globals.styles"

export const Layout = styled.div`
  padding: 1.5rem 2rem;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding: 1.5rem 3rem;
    max-width: 1400px;
    margin: 0 auto;
  }
  @media only screen and (min-width: ${breakpoints.desktop}) {
    padding: 1.5rem 5rem;
  }
`

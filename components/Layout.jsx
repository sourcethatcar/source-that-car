import styled from "@emotion/styled"

export const Layout = styled.div`
  padding: 1.5rem 2rem;

  @media only screen and (min-width: 640px) {
    padding: 1.5rem 3rem;
    max-width: 1400px;
    margin: 0 auto;
  }
  @media only screen and (min-width: 992px) {
    padding: 1.5rem 5rem;
  }
`

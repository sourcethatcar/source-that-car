import styled from "@emotion/styled"

export const Layout = styled.div`
  padding: 1rem 1rem;
  /* min-height: ${(props) =>
    props.as === "section" ? "100vh" : "fit-content"}; */

  @media only screen and (min-width: 640px) {
    padding: 1.5rem 3rem;
  }
  @media only screen and (min-width: 992px) {
    padding: 1.5rem 5rem;
  }
`

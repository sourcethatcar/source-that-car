import styled from "@emotion/styled"
import { Layout } from "./Layout"

const FooterWrapper = styled.footer`
  height: 150px;
  color: var(--colorWhite);
  background-color: var(--colorBlue);

  .footer-layout {
    text-align: center;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .grid4 span {
    color: var(--colorYellow);
  }

  @media only screen and (min-width: 640px) {
    height: 100px;
    .footer-layout {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      column-gap: 1rem;
    }
    .grid1 {
      justify-self: start;
      align-self: center;
    }
    .grid2 {
      justify-self: end;
      align-self: center;
    }
    .grid3 {
      justify-self: start;
      align-self: center;
    }
    .grid4 {
      justify-self: end;
      align-self: center;
    }
  }
`
export const Footer = () => {
  return (
    <FooterWrapper id="footer" as="footer">
      <Layout className="footer-layout">
        <small className="grid1">
          © 2021 Source That Car. All rights reserved
        </small>
        <small className="grid2">Privacy Policy</small>
        <small className="grid3">Terms and Conditions</small>
        <small className="grid4">
          made by <span>suneet</span>.codes
        </small>
      </Layout>
    </FooterWrapper>
  )
}

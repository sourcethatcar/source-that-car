import styled from "@emotion/styled"
import { Layout } from "./Layout"
import { breakpoints } from "../styles"

const FooterWrapper = styled.footer`
  height: 150px;
  color: var(--colorWhite);
  background-color: var(--colorBlue);

  .footer-layout,
  .footer-items {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .footer-layout {
    justify-content: center;
  }
  .footer-items {
    justify-content: space-evenly;
    align-items: center;
  }
  .right {
    span {
      color: var(--colorYellow);
    }
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    .footer-items {
      height: fit-content;
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
    }
    .footer-item {
      display: flex;
      align-items: flex-start;
    }
    .left {
      justify-content: flex-start;
    }
    .center {
      justify-content: center;
    }
    .right {
      justify-content: flex-end;
    }
  }
`
export const Footer = () => {
  return (
    <FooterWrapper id="footer" as="footer">
      <Layout className="footer-layout">
        <div className="footer-items">
          <div className="footer-item left">
            <small className="grid1">
              © 2021 Source That Car. All rights reserved
            </small>
          </div>
          <div className="footer-item center ">
            <small className="grid2">Privacy Policy</small>{" "}
          </div>
          <div className="footer-item center ">
            <small className="grid3">Terms and Conditions</small>
          </div>
          <div className="footer-item right">
            <small>
              made by <span>suneet</span>.codes
            </small>
          </div>
        </div>
      </Layout>
    </FooterWrapper>
  )
}

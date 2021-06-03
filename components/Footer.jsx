import styled from "@emotion/styled"
import { Layout } from "./Layout"
import { breakpoints } from "../styles"
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si"

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
  .footer-item {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .right {
    span {
      color: var(--colorYellow);
    }
  }

  .social-icons-container {
    display: flex;
    justify-content: flex-start;
    padding: 1rem 0;

    a {
      padding: 0 1rem;

      svg {
        width: 1rem;
        height: 1rem;
        fill: var(--colorYellow);
      }
    }
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    .footer-items {
      flex-direction: row;
    }
    .footer-item {
      width: calc(100% / 3);
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
            <small>© 2021 Source That Car. All rights reserved</small>
          </div>
          <div className="footer-item center">
            <div className="social-icons-container">
              <a href="https://www.instagram.com/source.that.car/">
                <SiInstagram />
              </a>
              <a href="https://www.facebook.com/sourcethatcar19/">
                <SiFacebook />
              </a>
              <a href="https://www.linkedin.com/in/mike-barter-sourcethatcar-b42a8229/">
                <SiLinkedin />
              </a>
            </div>
          </div>
          <div className="footer-item right">
            <small>
              made by{" "}
              <a href="https://www.suneet.codes/">
                <span>suneet</span>
                .codes
              </a>
            </small>
          </div>
        </div>
      </Layout>
    </FooterWrapper>
  )
}

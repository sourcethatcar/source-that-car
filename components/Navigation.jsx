import { useState } from "react"
import styled from "@emotion/styled"
import { Layout } from "./Layout"
import Logo from "../components/icons/Logo"

const NavigationWrapper = styled.nav`
  .fixed {
    position: fixed;
  }
  .navLayout {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .logo {
    display: none;
  }

  .mobileNavButton {
    width: 4rem;
    height: 4rem;
    border: none;
    background-color: transparent;

    svg {
      width: inherit;
      height: inherit;
    }
    &:hover,
    :focus {
      cursor: pointer;
      outline: none;
    }
  }

  .links-container {
    display: none;
  }

  .mobileMenu {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    width: 100%;
    background-color: var(--colorBlue);
    color: var(--colorWhite);
    display: grid;
    grid-template-rows: 10vh 90vh;
    transition: all 1s ease;
  }
  .inactive {
    left: -100%;
  }

  .active {
    left: 0;
    transition: all 1s ease;
  }

  .close-button-container {
    padding: 1.5rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mobile-links-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ul {
      height: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      li {
        padding: 3rem 0;
      }
    }
  }

  @media only screen and (min-width: 640px) {
    .navLayout {
      justify-content: space-between;
    }

    .mobileNavButton {
      display: none;
    }
    .logo {
      display: block;
      width: 3rem;
      height: 3rem;
    }

    .links-container {
      display: block;
    }

    .links {
      display: flex;
      color: var(--colorBlue);

      li {
        padding: 0 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      li:last-child {
        padding: 0rem;
        padding-left: 1rem;
      }
    }

    .contactButton {
      color: var(--colorWhite);
      h3 {
        border-radius: 5px;
        background-color: var(--colorBlue);
        padding: 0.75rem 1.2rem;
        font-weight: normal;
      }
    }
  }
`

export const Navigation = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => setClicked(!clicked)
  const handleMobileMenuClick = () => setClicked(false)

  return (
    <NavigationWrapper id="navigation">
      <Layout className="navLayout">
        <Logo className="logo" />
        <div className="links-container">
          <ul className="links">
            <li>
              <a href="#services">
                <h3>Our Service</h3>
              </a>
            </li>
            <li>
              <a href="#testimonials">
                <h3>Testimonials</h3>
              </a>
            </li>
            <li className="contactButton">
              <a href="#contact">
                <h3>Contact</h3>
              </a>
            </li>
          </ul>
        </div>
        <button className="mobileNavButton" onClick={handleClick}>
          <Logo className="mobileLogo" />
        </button>
      </Layout>
      {/* Markup for fullscreen mobile navigation - only visible when the logo is clicked on mobile view */}

      <div className={clicked ? "mobileMenu active" : "mobileMenu inactive"}>
        <div className="close-button-container">
          <div className="fixed">
            <button className="mobileNavButton" onClick={handleMobileMenuClick}>
              <Logo className="mobileLogo" inverted />
            </button>
          </div>
        </div>
        <div className="mobile-links-container">
          <div className="fixed">
            <ul className="mobile-links">
              <li>
                <a href="#services" onClick={handleMobileMenuClick}>
                  <h1>Our Service</h1>
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={handleMobileMenuClick}>
                  <h1>Testimonials</h1>
                </a>
              </li>
              <li className="contactButton" onClick={handleMobileMenuClick}>
                <a href="#contact">
                  <h1>Contact</h1>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  )
}

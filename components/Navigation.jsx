import { useState } from "react"
import styled from "@emotion/styled"
import { Layout, Button } from "../components"
import Logo from "../components/icons/Logo"
import { breakpoints } from "../styles"
import PropTypes from "prop-types"

const NavigationWrapper = styled.nav`
  position: absolute;
  left: 0;
  right: 0;

  .navLayout {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .logo {
    display: none;
  }

  .links-container {
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

  @media only screen and (min-width: ${breakpoints.tablet}) {
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
      p {
        border-radius: 5px;
        background-color: var(--colorBlue);
        padding: 0.75rem 1.2rem;
        font-weight: normal;
      }
    }
  }
`
const NavigationMobileWrapper = styled.nav`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ clicked }) => (clicked ? "0" : "-100%")};
  right: 0;
  z-index: 100;
  width: 100%;
  background-color: var(--colorBlue);
  transition: all 1s ease;
  color: var(--colorWhite);
  display: grid;
  grid-template-rows: 10vh 90vh;
  overflow: hidden;

  .inactive {
    left: -100%;
  }

  .active {
    left: 0;
  }

  .close-button-container {
    padding: 1.5rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .fixed {
    position: fixed;
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
  @media only screen and (min-width: ${breakpoints.tablet}) {
    .mobileNavButton {
      display: none;
    }
  }
`

export const Navigation = () => {
  const [clicked, setClicked] = useState(false)
  const toggleMenu = () => setClicked(!clicked)
  const closeMenu = () => setClicked(false)

  return (
    <>
      <NavigationWrapper id="navigation">
        <Layout className="navLayout">
          <Logo className="logo" />
          <div className="links-container">
            <ul className="links">
              <li>
                <a href="#services">
                  <strong>
                    <p>Our Service</p>
                  </strong>
                </a>
              </li>
              <li>
                <a href="#testimonials">
                  <p>
                    <strong>Testimonials</strong>
                  </p>
                </a>
              </li>
              <li>
                <Button href="#contact" fontWeight="bold">
                  Contact
                </Button>
              </li>
            </ul>
          </div>
          <button className="mobileNavButton" onClick={toggleMenu}>
            <Logo className="mobileLogo" />
          </button>
        </Layout>
      </NavigationWrapper>
      {clicked && <NavigationMobile clicked={clicked} closeMenu={closeMenu} />}
    </>
  )
}

const NavigationMobile = ({ clicked, closeMenu }) => {
  return (
    <NavigationMobileWrapper id="navigation-mobile" clicked={clicked}>
      <div className="close-button-container">
        <div className="fixed">
          <button className="mobileNavButton" onClick={closeMenu}>
            <Logo className="mobileLogo" inverted />
          </button>
        </div>
      </div>
      <div className="mobile-links-container">
        <div className="fixed">
          <ul className="mobile-links">
            <li>
              <a href="#services" onClick={closeMenu}>
                <h1>Our Service</h1>
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={closeMenu}>
                <h1>Testimonials</h1>
              </a>
            </li>
            <li className="contactButton" onClick={closeMenu}>
              <a href="#contact">
                <h1>Contact</h1>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </NavigationMobileWrapper>
  )
}

NavigationMobile.propTypes = {
  clicked: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
}

import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { Layout, Button } from "../components"
import Logo from "../components/icons/Logo"
import { GiHamburgerMenu } from "react-icons/gi"
import { breakpoints } from "../styles"
import PropTypes from "prop-types"

const NavigationWrapper = styled.nav`
  position: absolute;
  left: 0;
  right: 0;

  .navLayout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .logo,
  .mobile-hamburger {
    width: 3rem;
    height: 3rem;
  }

  .mobile-hamburger {
    border: none;
    background-color: transparent;
    cursor: pointer;
    svg {
      fill: var(--colorBlue);
      height: 100%;
      width: 100%;
    }
  }

  .links-container {
    display: none;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    .mobile-hamburger {
      display: none;
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
const MobileDrawerWrapper = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${({ isDrawerOpen }) => (isDrawerOpen ? "0" : "-100%")};
  right: 0;
  z-index: 100;
  width: 100%;
  background-color: var(--colorBlue);
  transition: left 0.25s ease-in;
  color: var(--colorWhite);

  .mobile-drawer-layout {
    height: 100%;
  }

  .navLayout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .logo,
  .mobile-hamburger {
    width: 3rem;
    height: 3rem;
  }

  .mobile-hamburger {
    border: none;
    background-color: transparent;
    cursor: pointer;
    svg {
      fill: var(--colorWhite);
      height: 100%;
      width: 100%;
    }
  }

  .mobile-drawer-links-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      li {
        padding: 3rem 0;
      }
    }
  }

  .contactButton {
    color: var(--colorWhite);
    h1 {
      border-radius: 5px;
      background-color: var(--colorBlue);
      padding: 0.75rem 1.2rem;
      border: 1px solid var(--colorWhite);
    }
  }
`

export const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleMenu = () => setIsDrawerOpen(!isDrawerOpen)
  const closeMenu = () => setIsDrawerOpen(false)

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
          <button className="mobile-hamburger" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>
        </Layout>
      </NavigationWrapper>
      <MobileDrawer isDrawerOpen={isDrawerOpen} closeMenu={closeMenu} />
    </>
  )
}

const MobileDrawer = ({ isDrawerOpen, closeMenu }) => {
  /**  change <body/> overflow value when drawer is open */
  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "scroll"
  }, [isDrawerOpen])

  return (
    <MobileDrawerWrapper id="mobile-drawer" isDrawerOpen={isDrawerOpen}>
      <Layout className="mobile-drawer-layout">
        <div className="navLayout">
          <Logo className="logo" inverted />
          <button className="mobile-hamburger" onClick={closeMenu}>
            <GiHamburgerMenu />
          </button>
        </div>
        <div className="mobile-drawer-links-container">
          <ul className="mobile-drawer-links">
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
      </Layout>
    </MobileDrawerWrapper>
  )
}

MobileDrawer.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
}

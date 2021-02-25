import styled from "@emotion/styled"
import { Layout } from "./Layout"
import Logo from "../components/icons/Logo"

const NavigationMobileWrapper = styled.nav`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => (props.clicked ? "0" : "-100%")};
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
  @media only screen and (min-width: 640px) {
    .mobileNavButton {
      display: none;
    }
  }
`

export const NavigationMobile = ({ clicked, closeMenu }) => {
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

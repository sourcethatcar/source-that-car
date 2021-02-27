import styled from "@emotion/styled"
import { Layout, Button } from "../components"
import Logo from "../components/icons/Logo"
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
      p {
        border-radius: 5px;
        background-color: var(--colorBlue);
        padding: 0.75rem 1.2rem;
        font-weight: normal;
      }
    }
  }
`

export const Navigation = ({ toggleMenu }) => {
  return (
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
  )
}

Navigation.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
}

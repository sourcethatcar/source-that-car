import styled from "@emotion/styled"
import Logo from "../components/icons/Logo"

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    width: 3rem;
    height: 3rem;
  }
  ul {
    display: none;
  }

  @media only screen and (min-width: 640px) {
    justify-content: space-between;
    ul {
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

  @media only screen and (min-width: 992px) {
    /* .logo {
      width: 2.5rem;
      height: 2.5rem;
    } */
  }
`

export const Navigation = () => {
  return (
    <NavigationWrapper id="navigation">
      <Logo className="logo" />
      <div className="link-container">
        <ul>
          <li>
            <h3>Our Service</h3>
          </li>
          <li>
            <h3>Testimonials</h3>
          </li>
          <li className="contactButton">
            <h3>Contact</h3>
          </li>
        </ul>
      </div>
    </NavigationWrapper>
  )
}

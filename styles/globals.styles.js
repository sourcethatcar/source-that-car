import { css } from "@emotion/react"

export const breakpoints = {
  tablet: "640px",
  desktop: "992px",
}

export const globalStyles = css`
  :root {
    --colorBlue: #14213d;
    --colorWhite: #ffffff;
    --colorGrey: #e5e5e5;
    --colorYellow: #fca311;
  }
  html {
    background-color: var(--colorGrey);
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 12px;
    font-family: "Roboto", sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 1.5rem;
  }
  ul {
    list-style-type: none;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    html,
    body {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: ${breakpoints.desktop}) {
    html,
    body {
      font-size: 16px;
    }
  }
`

// export const globalStyles = css`
//   :root {
//     --colorBlue: #14213d;
//     --colorWhite: #ffffff;
//     --colorGrey: #e5e5e5;
//     --colorYellow: #fca311;
//   }
//   html {
//     background-color: var(--colorGrey);
//   }
//   html,
//   body {
//     padding: 0;
//     margin: 0;
//     font-size: 12px;
//     font-family: "Roboto", sans-serif;
//   }

//   a {
//     color: inherit;
//     text-decoration: none;
//   }

//   * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }

//   h1 {
//     font-size: 1.5rem;
//   }
//   ul {
//     list-style-type: none;
//   }

//   @media only screen and (min-width: ${breakpoints.tablet}) {
//     html,
//     body {
//       font-size: 14px;
//     }
//   }

//   @media only screen and (min-width: ${breakpoints.desktop}) {
//     html,
//     body {
//       font-size: 16px;
//     }
//   }
// `

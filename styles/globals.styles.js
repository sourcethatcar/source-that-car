import { css } from "@emotion/react"

export const globalStyles = css`
  :root {
    --colorBlue: #14213d;
    --colorWhite: #ffffff;
    --colorGrey: #e5e5e5;
    --colorYellow: #fca311;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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

  @media only screen and (min-width: 640px) {
    html,
    body {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 992px) {
    html,
    body {
      font-size: 16px;
    }
  }
`

import PropTypes from "prop-types"
import { Global } from "@emotion/react"
import { globalStyles } from "../styles/globals.styles"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
}

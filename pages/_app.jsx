import PropTypes from "prop-types"
import { Header } from "../components"
import { globalStyles } from "../styles"
import { Global } from "@emotion/react"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
}

import PropTypes from "prop-types"
import { Global } from "@emotion/react"
import { globalStyles } from "../styles"
import { Header } from "../components"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
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

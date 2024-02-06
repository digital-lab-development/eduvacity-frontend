import { CacheProvider } from "@emotion/react"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import AOS from "aos"
import "aos/dist/aos.css"
import Head from "next/head"
import PropTypes from "prop-types"
import { useEffect } from "react"
import createEmotionCache from "../src/lib/createEmotionCache"
import "../styles/globals.css"
import theme from "../styles/muiTheme"

const clientSideEmotionCache = createEmotionCache()
export default function MyApp({
  Component,
  props,
  emotionCache = clientSideEmotionCache,
}) {
  const getLayout = Component.getLayout || ((page) => page)

  useEffect(() => {
    AOS.init({
      duration: 500,
    })
  }, [])
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <link rel="icon" href="/favicon.ico" />
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {getLayout(<Component {...props} />)}
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}

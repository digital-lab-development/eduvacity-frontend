import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import PropTypes from "prop-types";
import { useEffect } from "react";
import createEmotionCache from "../src/lib/createEmotionCache";
import "../styles/globals.css";
import theme from "../styles/muiTheme";
// import Intercom from "@intercom/messenger-js-sdk";

const clientSideEmotionCache = createEmotionCache();
export default function MyApp({
  Component,
  props,
  emotionCache = clientSideEmotionCache,
}) {
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  // initializing tawk
  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/66b203c61601a2195ba1539c/1i4jltgjl";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

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

      {
        // Intercom({
        //   app_id: 'koy3owr2',
        // })
      }
    </>
  );
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import 'bootstrap-icons/font/bootstrap-icons.css'

//config.autoAddCss = false

import { useEffect } from "react";


import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
      <Component {...pageProps} />
  )
}

export default MyApp

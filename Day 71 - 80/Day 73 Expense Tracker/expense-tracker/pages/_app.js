import '../styles/globals.css'
import { IndexProvider } from '../Context/Context'

function MyApp({ Component, pageProps }) {
  return (
    <IndexProvider> 
      <Component {...pageProps} />
      </IndexProvider>
  )
}

export default MyApp

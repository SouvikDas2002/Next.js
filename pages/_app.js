import '../styles/globals.css'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'


function MyApp({ Component, pageProps }) {
  return (
    <>
     <NavBar/>,
    <Component {...pageProps} />,
    <Footer/>
</>
  )
}

export default MyApp

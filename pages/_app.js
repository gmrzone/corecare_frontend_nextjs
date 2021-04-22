import { useEffect, useState, useRef } from 'react'
import '../styles/globals.css'
import { SWRConfig } from 'swr';
import axios from 'axios'
const MyApp = ({ Component, pageProps }) => {
  const [mobileNav, mobileNavToggle] = useState(false)
  let screenWidthRef = useRef(null)
  useEffect(() => {
    mobileNavToggle(window.innerWidth > 992 ? false : true)
    const renderNav = () => {
        const currentWidth = window.innerWidth
        if (currentWidth > 992 && screenWidthRef.current < 992){
            screenWidthRef.current = currentWidth
            mobileNavToggle(false)
            
        }
        else if (currentWidth <= 992 && screenWidthRef.current > 992){
            screenWidthRef.current = currentWidth
            mobileNavToggle(true)

        }
    }
    renderNav()
    window.addEventListener('resize', renderNav)

    return () => {
        window.removeEventListener('resize', renderNav)
    }
}, [screenWidthRef, mobileNavToggle, mobileNav])

  return (
        <SWRConfig value={{fetcher: (...args) => axios.get(...args).then(response => response.data)}}>
            <Component {...pageProps} mobileNav={mobileNav}/>
        </SWRConfig>
        )
}

export default MyApp

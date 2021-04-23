import { useEffect, useState, useRef } from 'react'
import useMobileNav from '../data/mobileNav'
import '../styles/globals.css'
import { BaseCartProvider } from '../context/basicCartContext'
const MyApp = ({ Component, pageProps }) => {
  const mobileNav = useMobileNav()


  return (
            <BaseCartProvider>
                <Component {...pageProps} mobileNav={mobileNav}/>
            </BaseCartProvider>
        )
}

export default MyApp

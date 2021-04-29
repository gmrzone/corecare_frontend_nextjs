import { useEffect, useState, useRef } from 'react'
import useMobileNav from '../data/mobileNav'
import '../styles/globals.css'
import { AuthContextProvider } from '../context/AuthContext'
import { BaseCartProvider } from '../context/basicCartContext'
const MyApp = ({ Component, pageProps }) => {
  const mobileNav = useMobileNav()


  return (
            <AuthContextProvider>
                <BaseCartProvider>
                    <Component {...pageProps} mobileNav={mobileNav}/>
                </BaseCartProvider>
            </AuthContextProvider>
        )
}

export default MyApp

import { useEffect, useState, useRef } from 'react'
import useMobileNav from '../data/mobileNav'
import '../styles/globals.css'
import { AuthContextProvider } from '../context/AuthContext'
import { BaseCartProvider } from '../context/basicCartContext'
import { CsrfContextProvider } from '../context/CsrfTokenContext'
const MyApp = ({ Component, pageProps }) => {
  const mobileNav = useMobileNav()


  return (
            <AuthContextProvider>
                <BaseCartProvider>
                    <CsrfContextProvider>
                        <Component {...pageProps} mobileNav={mobileNav}/>
                    </CsrfContextProvider>
                </BaseCartProvider>
            </AuthContextProvider>
        )
}

export default MyApp

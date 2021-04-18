import Header from '../global/Header'
import Link from 'next/link'
import Footer from '../global/Footer'
import SignUpModel from '../signup'
import { useState } from 'react'
const Layout = ({ children, HeroImage=null, mobileNav }) => {
    const [signUpActive, setSignUpActive] = useState(false)
    return (
        <>  
            <div className="afzal-container">
                <div id="model"></div>
                <SignUpModel modelActive={signUpActive} closeSignup={() => setSignUpActive(false)}/>
                <Header mobileNav={mobileNav} openSignup={() => setSignUpActive(true)}/>
                {HeroImage && <HeroImage />}
                <main>
                    {children}
                </main>
            </div>
            <footer id="footer">
                <Footer mobileNav={mobileNav}/>
            </footer>
        </>
    )
}

export default Layout
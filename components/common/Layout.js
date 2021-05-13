import Header from '../global/Header'
import Footer from '../global/Footer'
import SignUpModel from '../signup'
import { useState } from 'react'
const Layout = ({ children, HeroImage=null, mobileNav, heroProps, ServiceListModel=null, serviceListProps, Modal=null, modalProps, FooterSeft=null }) => {
    const [signUpActive, setSignUpActive] = useState(false)
    return (
        <>  
            <div className="afzal-container">
                {ServiceListModel && <ServiceListModel {...serviceListProps} mobileNav={mobileNav}/>}
                {Modal && <Modal {...modalProps}/>}
                <div id="model"></div>
                <SignUpModel modelActive={signUpActive} closeSignup={() => setSignUpActive(false)}/>
                <Header mobileNav={mobileNav} openSignup={() => setSignUpActive(true)}/>
                {HeroImage && <HeroImage {...heroProps} mobileNav={mobileNav}/>}
                <main>
                    {children}
                </main>
            </div>
            <footer id="footer">
                {FooterSeft ?  <FooterSeft /> : <Footer mobileNav={mobileNav}/>}
            </footer>
        </>
    )
}

export default Layout
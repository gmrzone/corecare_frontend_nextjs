import Header from '../global/Header'
import Footer from '../global/Footer'
import SignUpModel from '../signup'
import { useState, useContext } from 'react'
import {ProfileBoxitem, ProfileBoxitemLogin, ProfileBoxitemMobileLogin, navItem, ProfileBoxitemMobile } from '../../data/_variables'
import { SignUpContext } from '../../context/SIgnUpContext'
const Layout = ({ children, HeroImage=null, mobileNav, heroProps, ServiceListModel=null, serviceListProps, Modal=null, modalProps, FooterSeft=null }) => {
    // const [signUpActive, setSignUpActive] = useState(false)
    const { signUpActive, setSignUpActive } = useContext(SignUpContext)
    return (
        <>  
            <div className="afzal-container">
                {ServiceListModel && <ServiceListModel {...serviceListProps} mobileNav={mobileNav}/>}
                {Modal && <Modal {...modalProps}/>}
                <div id="model"></div>
                <SignUpModel modelActive={signUpActive} closeSignup={() => setSignUpActive(false)}/>
                <Header mobileNav={mobileNav} openSignup={() => setSignUpActive(true)} ProfileBoxitem={ProfileBoxitem} ProfileBoxitemLogin={ProfileBoxitemLogin} ProfileBoxitemMobileLogin={ProfileBoxitemMobileLogin} ProfileBoxitemMobile={ProfileBoxitemMobile} navItem={navItem} />
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
import NavItem from './NavItem';
import ProfileBox from './ProfileBox';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react'
// import { openSignup, closeSignup, mobileNavToggle } from '../../actions'
// import Logo from '../../images/logo-full.svg';
// import LogoPink from '../../images/logo-full-pink.svg';
// import LogoMob from '../../images/logo-mobile.svg';
// import LogoMobPink from '../../images/logo-mobile-pink.svg';
import { ProfileBoxitem, ProfileBoxitemLogin, ProfileBoxitemMobile, ProfileBoxitemMobileLogin, BASE_URL } from '../../../data/_variables'

    
const Header = (props) => {
    // const { loginStatus } = props.authentication
    const [mobileNav, mobileNavToggle] = useState()
    const loginStatus  = false
    // let ProfileBoxItemRefDesktop = useRef(ProfileBoxitem)
    // let ProfileBoxItemRefMobile = useRef(ProfileBoxitemMobile)
    let screenWidthRef = useRef(null)
    const navbar = useRef()
    // const [mobileNav, setMobileNav] = useState(screenWidthRef.current > 700 ? false : true)
    // const { mobileNavToggle, mobileNav } = props
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
    }, [screenWidthRef, mobileNavToggle])
    
    
    // Sticky Navbar using IntersectionObserver
    // useEffect(() => {
    //     const animate = (status) => {
    //         if (status){
    //             navbar.current.classList.add('animate')
                
    //         }
    //         else{
    //             navbar.current.classList.remove('animate')
    //         }
    //     }
    //     const unStickNav = () => {
    //         navbar.current.classList.remove('sticky')
    //         if (mobileNav){
    //             navbar.current.firstChild.firstChild.firstChild.firstChild.src = '/logo-mobile.svg'

    //         }
    //         else{
    //             navbar.current.firstChild.firstChild.firstChild.firstChild.src = '/logo-full.svg'
                
    //         }
    //     }
    //     const options = {rootMargin: '200px 0px 0px 0px'}
    //     const observer = new IntersectionObserver(entries => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting){
    //                 animate(false)
    //                 setTimeout(() => unStickNav(), 200)
                    
    //             }
    //             else{
    //                 navbar.current.classList.add('sticky')
    //                 if (mobileNav){
    //                     // navbar.current.firstChild.firstChild.firstChild.firstChild.src = LogoMobPink
    //                     navbar.current.firstChild.firstChild.firstChild.firstChild.src = '/logo-mobile-pink.svg'
    //                     navbar.current.classList.add('stickyMobile')
                        
    //                 }
    //                 else{
    //                     navbar.current.firstChild.firstChild.firstChild.firstChild.src = '/logo-mobile-pink.svg'

    //                 }
    //                 setTimeout(() => animate(true), 30)
    //             }
                
    //         })
    //     }, options)
    //     observer.observe(document.getElementsByTagName('html'))
    // }, [mobileNav])
    return (
        <header className="header">
            <nav className='navbar ui container' ref={navbar}>
                <div className="containerAF nav-main">
                    <div className="logo">
                        <Link href="/"><img alt="main-logo" src={mobileNav ? '/logo-mobile.svg' : '/logo-full.svg'} height="55px" /></Link>
                    </div>
                    <ul className="nav-list">
                        {!mobileNav && (
                            <>  
                                <NavItem name="Become a Partner" to="/become-a-partner"/>
                                <NavItem name="Blog" to="/about"/>
                                <NavItem name="Contact" to="/contact"/>
                            </>
                            )}
                        <ProfileBox profileImage={null} dropDownList={mobileNav ? loginStatus ? ProfileBoxitemMobileLogin : ProfileBoxitemMobile : loginStatus ? ProfileBoxitemLogin : ProfileBoxitem} mobile={mobileNav} authentication={props.authentication || {loginStatus: false}}/>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
// const mapStateToProps = (state) => {
//     return {
//         mobileNav : state.mobileNav,
//         authentication: state.Authentication
//     }
// }
// export default connect(mapStateToProps, { openSignup, closeSignup, mobileNavToggle })(Header)
export default Header
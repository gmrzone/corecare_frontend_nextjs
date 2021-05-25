import Header from '../global/Header';
import Footer from '../login/LoginFooter'
import { ProfileBoxitem, ProfileBoxitemLogin, ProfileBoxitemMobile, ProfileBoxitemMobileLogin, navItem, navItemLogin } from './data'
const Layout = ({ children, mobileNav }) => {
    return (
        <>
         <Header mobileNav={mobileNav} ProfileBoxitem={ProfileBoxitem} ProfileBoxitemLogin={ProfileBoxitemLogin} ProfileBoxitemMobileLogin={ProfileBoxitemMobileLogin} ProfileBoxitemMobile={ProfileBoxitemMobile} navItem={navItem} navItemLogin={navItemLogin} blog={true}/>
        <main>
            <div id="model"></div>
            {children}
        </main>
        <footer id="footer">
            <Footer />
        </footer>
        </>
    )
}

export default Layout
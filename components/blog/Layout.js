import Header from '../global/Header';
import Footer from '../login/LoginFooter'
import { ProfileBoxitem, ProfileBoxitemLogin, ProfileBoxitemMobile, ProfileBoxitemMobileLogin, navItem, navItemLogin } from './data'
const Layout = ({ children, mobileNav, PostCreateModal = null, modalProps }) => {
    return (
        <>
         <Header mobileNav={mobileNav} ProfileBoxitem={ProfileBoxitem} ProfileBoxitemLogin={ProfileBoxitemLogin} ProfileBoxitemMobileLogin={ProfileBoxitemMobileLogin} ProfileBoxitemMobile={ProfileBoxitemMobile} navItem={navItem} navItemLogin={navItemLogin} blog={true}/>
         {PostCreateModal && <PostCreateModal modalProps={modalProps} mobileNav={mobileNav}/>}
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
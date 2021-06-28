import Header from '../global/Header';
import Footer from '../login/LoginFooter'
import PostCreateModal from './PostCreateModal'
import { ProfileBoxitem, ProfileBoxitemLogin, ProfileBoxitemMobile, ProfileBoxitemMobileLogin, navItem, navItemLogin } from './data'
import { useState, useContext } from 'react'
import { PostCreateModalContext } from '../../context/PostCreateModalContext'
const Layout = ({ children, mobileNav }) => {
    const { createModelActive, setCreateModalActive, textEditorLoading, setTextEditorLoading } = useContext(PostCreateModalContext)

    return (
        <>
         <Header mobileNav={mobileNav} ProfileBoxitem={ProfileBoxitem} ProfileBoxitemLogin={ProfileBoxitemLogin} ProfileBoxitemMobileLogin={ProfileBoxitemMobileLogin} ProfileBoxitemMobile={ProfileBoxitemMobile} navItem={navItem} navItemLogin={navItemLogin} blog={true} setPostCreateModalActive={setCreateModalActive}/>
         <PostCreateModal modalProps={{ createModelActive, setCreateModalActive, textEditorLoading, setTextEditorLoading }}/>
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
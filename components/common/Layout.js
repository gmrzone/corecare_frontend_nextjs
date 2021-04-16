import Header from '../global/Header'
import Link from 'next/link'
import Footer from '../global/Footer'
const Layout = ({ children, HeroImage=null, mobileNav }) => {
    return (
        <>  
            <div className="afzal-container">
                <div id="model"></div>
                <Header mobileNav={mobileNav}/>
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
import Header from '../global/Header'
import Link from 'next/link'
const Layout = ({ children, HeroImage=null, mobileNav }) => {
    return (
        <>  
            <div id="model"></div>
            <Header mobileNav={mobileNav}/>
            {HeroImage && <HeroImage />}
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </>
    )
}

export default Layout
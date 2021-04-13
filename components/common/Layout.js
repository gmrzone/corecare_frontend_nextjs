import Header from '../global/Header'
import Link from 'next/link'
const Layout = ({ children, HeroImage=null }) => {
    return (
        <>  
            <div id="model"></div>
            <Header />
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
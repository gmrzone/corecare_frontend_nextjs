import Header from '../global/Header'
import Link from 'next/link'
const Layout = ({ children, heroImage=null }) => {
    return (
        <>  
            <div id="model"></div>
            <Header />
            {heroImage && heroImage}
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </>
    )
}

export default Layout
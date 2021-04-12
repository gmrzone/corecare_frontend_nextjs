import Header from '../global/Header'
import Link from 'next/link'
const Layout = ({ children, heroImage=null }) => {
    return (
        <>
            <Header />
            {heroImage && heroImage}
            {children}
        </>
    )
}

export default Layout
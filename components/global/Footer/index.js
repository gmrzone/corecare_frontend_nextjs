import FooterCol from './footerCol'
import { col__one, col__two } from './footerData'
import Image from 'next/image'
const Footer = ({ mobileNav }) => {
    return (
        <>
            <div className="ui container footer-container">
                <div className="footer-col__1">
                    <div className="footer-top-item logo-small">
                        {/* <img src="/logo-full.svg" alt="footer-logo" width={150}/> */}
                        <Image src="/logo-full.svg" alt="footer-logo" width={150} height={46.88} />
                    </div>
                    <div className="social__icons">
                            <a href="https://www.facebook.com/GamerZonei5" className="social-link" target="_blank" rel="noopener noreferrer"><i className="facebook icon"></i></a>
                            <a href="#afzal" className="social-link" target="_blank" rel="noopener noreferrer"><i className="twitter icon"></i></a>
                            <a href="https://www.linkedin.com/in/afzal-saiyed-b25004200/" className="social-link" target="_blank" rel="noopener noreferrer"><i className="linkedin icon"></i></a>
                            <a href="https://www.instagram.com/afzal__saiyed/" className="social-link" target="_blank" rel="noopener noreferrer"><i className="instagram icon"></i></a>
                            <a href="https://www.youtube.com/channel/UCqHpah7p2NjkLxywQfG0d-Q" className="social-link" target="_blank" rel="noopener noreferrer"><i className="youtube icon"></i></a>
                            <a href="https://github.com/gmrzone" className="social-link" target="_blank" rel="noopener noreferrer"><i className="github icon"></i></a>
                    </div>
                </div>
                <FooterCol items={col__one} header="Support" mobileNav={mobileNav}/>
                <FooterCol items={col__two} header="Serving in" mobileNav={mobileNav}/>
                {/* <FooeterStats /> */}
            </div>
            <div className="ui inverted divider"></div>
            <div className="footer-end">&#169; 2019-2021 CoreCare Technologies Pvt Ltd</div>
        </>
    )
}

export default Footer



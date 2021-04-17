import style from '../../styles/partner/Partners.module.scss'
import { useState } from 'react';
import GetInTouch from './GetInTouch';
const PartnerHero = () => {
    const [imageLoaded, setImageLoaded] = useState(true)
    return (
        <div className={style.partner_hero_background}>
            <div className={"ui container " +  style.partner_hero_container}>
                <div className={style.partner_hero_text}>
                    <h1 className={style.main_title}>Earn More, Earn Respect, Safety Ensured.</h1>
                    <p className={style.description}>Join 5,500+ partners across Mumbai, Pune.</p>
                </div>
                <div className={style.partner_hero_image}>
                    <div className="ui placeholder" style={{display: imageLoaded ? "none" :  'block'}}>
                        <div className={style.image}></div>
                    </div>
                    <img src="/partner_hero.png" alt="partner-hero" className={style.partner_image} style={{display: imageLoaded ? "block" : "none"}} onLoad={() => setImageLoaded(true)}/>
                </div>
            </div>
            <GetInTouch />
        </div>
    )
}
export default PartnerHero
import style from '../../styles/partner/Partners.module.scss';
import Image from 'next/image'
import { useState } from 'react';
import PartnerImage from '../../public/partner_hero.png'
import GetInTouch from './GetInTouch';
const PartnerHero = () => {
    // const [imageLoaded, setImageLoaded] = useState(false)
    return (
        <div className={style.partner_hero_background}>
            <div className={"ui container " +  style.partner_hero_container}>
                <div className={style.partner_hero_text}>
                    <h1 className={style.main_title}>Earn More, Earn Respect, Safety Ensured.</h1>
                    <p className={style.description}>Join 5,500+ partners across Mumbai, Pune.</p>
                </div>
                <div className={style.partner_hero_image}>
                    <Image src={PartnerImage} layout="fill" objectFit="cover" className={style.partner_image} priority={true} placeholder="blur" alt="partner-hero-image"/>
                </div>
            </div>
            <GetInTouch />
        </div>
    )
}
export default PartnerHero
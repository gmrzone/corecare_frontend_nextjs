import Link from 'next/link'
import style from '../../styles/home/Home.module.scss'
import { useState } from 'react'
import Image from 'next/image'
// import { ServicePlaceHolder } from '../utils/ImagePlaceholder'

const ServiceItem = ({ BASE_URL, service, mobileNav, index }) => {
    const image_priority = mobileNav ? index <= 2 ? true : false : true
    return (
        <Link href={`/services/${service.slug}`}>
            <a className={style.service_item}>
                <div className={style.service_icon} style={{position: 'relative'}}>
                    <Image src={`${BASE_URL}${service.icon}`} layout="fill" priority={image_priority}/>
                </div>
                <div className={style.service_title}>{service.name}</div>
            </a>
        </Link>
    )
}

export default ServiceItem
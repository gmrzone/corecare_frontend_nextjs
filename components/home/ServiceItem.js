import Link from 'next/link'
import style from '../../styles/home/Home.module.scss'
import { useState } from 'react'
import Image from 'next/image'
// import { ServicePlaceHolder } from '../utils/ImagePlaceholder'

const ServiceItem = ({ BASE_URL, service }) => {
    const [Imageloading, setImageLoading] = useState(true)

    const imageLoaded = () => {
        setImageLoading(false)
        
    }
    return (
        <Link href={`/services/${service.slug}`}>
            <a className={style.service_item}>
                <div className={style.service_icon} style={{position: 'relative'}}>
                    <Image src={`${BASE_URL}${service.icon}`} layout="fill"/>
                </div>
                <div className={style.service_title}>{service.name}</div>
            </a>
        </Link>
    )
}

export default ServiceItem
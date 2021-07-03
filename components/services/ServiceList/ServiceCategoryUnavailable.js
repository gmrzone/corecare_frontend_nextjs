import style from '../../../styles/service/servicelist/ServiceCategoryUnavailable.module.scss'
import Image from 'next/image';
const ServiceCategoryUnavailable = ({ category }) => {
    return (
        <div className={style.unavailable_container}>
            {/* <img src={warning} alt="warning" className="warning-icon"/> */}
            <div className={style.warning_icon}>
                <Image src="/warning.svg" layout="fill" objectFit="cover" alt="category-unavailable" />
            </div>
            <div className={style.inner_container}>
                <h2 className={style.title}>Service Unavailable</h2>
                <p className={style.description}>Currently we are unable to provide services related to {category.split('-').map(x => x[0].toUpperCase() + x.substring(1))} Please Try again Later.</p>
            </div>
        </div>
    )
}

export default ServiceCategoryUnavailable
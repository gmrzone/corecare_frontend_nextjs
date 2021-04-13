
import style from '../../styles/home/Home.module.scss'
import  ServiceItem from './ServiceItem'
import { BASE_URL } from '../../data/_variables'



const ServiceBox = ({ services, mobileNav }) => {
    const renderServices = services?.map((service) => {
        return <ServiceItem service={service} BASE_URL={BASE_URL} key={service.id}/>
    })
    return(
        <div className={style.service_box_container + `${!mobileNav ? " ui container" : " "}`}>
            <div className={style.adjustment}>
                <div className={style.service_inner_container}>
                    {renderServices}
                </div>
            </div>
        </div>
    )
}


export default ServiceBox;
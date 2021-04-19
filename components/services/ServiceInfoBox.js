import style from '../../styles/service/ServiceInfo.module.scss'
import { useRef, useEffect } from 'react';
// import { connect } from 'react-redux'
const ServiceInfoBox = (props) => {
    // if searched then click on service Box item to open servicelist
    const { searchParam } = props
    const itemRef = useRef()
    useEffect(() => {
        if (searchParam){
            itemRef.current.click()
        }
    }, [searchParam])
    const renderContent = props.content.map((x, i) => {
        return (
                <div className={style.service_content_item} key={i} onClick={() => props.onClick()} ref={itemRef}>
                    <p className={style.content_text}>{x}</p>
                    <i className="angle right icon"></i>
                </div>
                )      

    })
    return (
        <div className={`${style.main_container} ${props.mobileNav ? "ui container" : null}`}>
            <div className={style.service_info_box}>
                <div className={style.service_info__title}>
                    <h1 className={style.text}>{props.title}:</h1>
                </div>
                <div className={style.service_info_content}>
                    {renderContent}
                </div>
            </div>
            <div className={style.service_info_rating}>
                    <div className={style.star_rating}>
                        <div className={style.header}>
                            <i className="star icon" />{props.rating}/5
                        </div>
                        <span className={style.rating_content}>based on {props.ratingCount}<br /> ratings</span>
                    </div>
                    <div className={style.booking_done}>
                        <div className={style.booking_header}>{props.bookingDone}</div>
                        <span className={style.booking_text}>Bookings done in last <br />1 year</span>
                    </div>
            </div>
        </div>

    )
}
// const mapStateToProps = (state) => {
//     return {
//         mobileNav: state.mobileNav
//     }
// }
// export default connect(mapStateToProps)(ServiceInfoBox)
export default ServiceInfoBox
// <i class="angle right icon"></i>
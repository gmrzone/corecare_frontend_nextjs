import reactDom from 'react-dom';
import CategoryChangeModel from './categoryChangeModel'
import { useEffect, useState, useRef } from 'react';
// import{ ArrowLeftOutlined }from '@ant-design/icons';
import style from '../../../styles/service/servicelist/ServiceList.module.scss'
// import { connect } from 'react-redux';
// import { fetchFullService } from '../../../../actions';
import SubcategoryHeader from './SubcategoryHeader'
import ServiceContent from './ServiceContent';
import Image from 'next/image';
import Link from 'next/link';
import ServiceCategoryUnavailable from './ServiceCategoryUnavailable';
const ServiceList = ({ category, active, setActive, reference,  subcategorys, mobileNav, cartCount, searchParam, services }) => {
    const [categoryChangeModelActive, setCategoryChangeModelActive] = useState(false)
    const [modelHeaderText, setModelHeaderText] = useState("Category Changed From")
    const [replacementCartItem, setReplacementCartItem] = useState(null)
    const incrementReplacedService = useRef()
    // const scrollSearchedSubcategory = (callback) => {
        
    // }
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        }   
    }, [])

    // useEffect(() => {
    //     fetchFullService(category)
    // }, [fetchFullService, category])

    const closeCategoryModel = () => {
        setCategoryChangeModelActive(false)
    }
    const openCategoryModel = () => {
        setCategoryChangeModelActive(true)
        
    }

    return reactDom.createPortal(
        <div className={style.service_list_model__main} ref={reference} style={{left: active ? '0%' : '100%'}}>
            <CategoryChangeModel modelActive={categoryChangeModelActive} closeModel={closeCategoryModel} header={modelHeaderText} category={category} replacementItem={replacementCartItem} incrementReplacedService={incrementReplacedService}/>
            <div className={style.service_list_main_header}>
                <div className="service-list-close" onClick={() => setActive(!active)}><i className="far fa-times" style={{float: 'right', cursor: 'pointer'}} /></div>
                <div className={style.service_list_title}>{category[0].toUpperCase() + category.slice(1)}</div>
                <Link href="/cart">
                    <a className={style.cart_icon_container}>
                    {/* <img src={cart_image} alt="cart" className="cart-icon" /> */}
                        <Image className={style.cart_icon_img} alt="cart" layout="fill" objectFit="cover" />
                        <div className={style.cart_count} style={{padding: cartCount > 9 ? "0 3px 0 3px" : "0 5px 0 5px"}}>{cartCount || 0}</div>
                    </a>
                </Link>
            </div>
            <div className={`${style.service_list_model} ${mobileNav ? "" : "ui container"}`} style={{display: subcategorys?.length === 0 ? "block" : "grid" }}>
                {subcategorys?.length > 0 ? <SubcategoryHeader data={subcategorys} searchParam={searchParam} /> : <ServiceCategoryUnavailable category={category}/>}
                {subcategorys?.length > 0 ? <ServiceContent category={category} openCategoryModel={openCategoryModel} setModelText={setModelHeaderText} setReplacementCartItem={setReplacementCartItem} incrementReplacedService={incrementReplacedService} services={services}/> : ""}
            </div>
        </div>,
        document.getElementById('service-list')
    )
}
// const mapStateToProps = (state) => {
//     let cartCount = 0;
//     Array.from(Object.values(state.basicCart)).forEach(x => {
//         cartCount += x.quantity
//     })
//     return {
//         subcategorys: state.allServices.subcategory,
//         mobileNav: state.mobileNav,
//         cartCount: cartCount
//     }
// }
// export default connect(mapStateToProps, { fetchFullService })(ServiceList)
export default ServiceList
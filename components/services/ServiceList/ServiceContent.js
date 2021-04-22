// import { connect } from 'react-redux';
import style from '../../../styles/service/servicelist/ServiceList.module.scss'
import { BASE_URL } from '../../../data/_variables';
import AddToCart from './AddToCartButton';
import Image from 'next/image'
// import { addToCart, removeFromCart } from '../../../../actions'
// import LazyLoadImage from '../../../utils/LazyLoadImage'
const ServiceContent = ({ category, openCategoryModel, setModelText, setReplacementCartItem, services, subcategorys, basicCart, addToCart, removeFromCart, incrementReplacedService}) => {

    // const updateCartReplacementItem = (service_id) => {
    //     setReplacementCartItem(service_id)
    // }
    // const opencartegoryChangeModel = () => {
    //     openCategoryModel()
    // }
    // const setModelHeaderText = (text) => {
    //     setModelText(text)
    // }
    const addToCartHandler = (service_id, setCartCount) => {
        incrementReplacedService.current = setCartCount
        // addToCart(service_id, category, opencartegoryChangeModel, setModelHeaderText, setCartCount, updateCartReplacementItem)
        addToCart(service_id, category, setCartCount, openCategoryModel, setModelText, setReplacementCartItem)
    }
    const removeFromCartHandler = (service_id) => {
        removeFromCart(service_id)
    }

    const renderCategoryItems = (itemList) => {
        return itemList.map(x => {
            return (
                <div className={style.service_category_items} key={x.id}>
                    <div className={style.item_detail}>
                        <div className={style.item_image}>
                            {/* <LazyLoadImage width={60} height={60} src={BASE_URL + x.icon}/> */}
                            {/* <img src={BASE_URL + x.icon} alt="service" width={60}/> */}
                            <Image src={BASE_URL + x.icon} width="60" height="60" alt="service_icon" className={style.img_image}/>
                        </div>
                        <div className={style.item_content}>
                            <h4>{x.name}</h4>
                            <span>&#8377;&nbsp;{x.price}</span>
                        </div>
                        <AddToCart forService={x} add={addToCartHandler} remove={removeFromCartHandler} cart={basicCart}/>
                    </div>
                    {x.description ? <div className="ui divider"></div> : ""}
                    {x.description ? <ul className="item-description-list">
                        {x.description.split('  ').map((x, i) => (
                            <li key={i}>{x}</li>
                        ))}
                    </ul> : ""}
                    
                    
                </div>
            )
        })
        
    }
    const renderServices = Reflect.ownKeys(services).map((x, i) => {
        return (
            <div id={x} className={style.service_items_container} key={i}>
                <div className={style.service_items_title}>{subcategorys[i]['name']}</div>
                <div className={style.service_items_container__main}>{renderCategoryItems(services[x])}</div>
            </div>
        )
    })
    return (
        <div className={`ui container ${style.service_content_container}`} >  
            <div className={style.service_content_inner__container}>
                {renderServices}
            </div>
        </div>
    )
}
// const mapStateToProps = (state) => {
//     return {
//         services: state.allServices.services,
//         subcategory: state.allServices.subcategory,
//         basicCart: state.basicCart
//     }
// }
// export default connect(mapStateToProps, { addToCart, removeFromCart })(ServiceContent)
export default ServiceContent
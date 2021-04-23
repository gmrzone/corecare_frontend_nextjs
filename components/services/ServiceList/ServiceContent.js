// import { connect } from 'react-redux';
import style from '../../../styles/service/servicelist/ServiceList.module.scss'
import { BASE_URL } from '../../../data/_variables';
import AddToCart from './AddToCartButton';
import Image from 'next/image'
import axios from '../../../data/backendApi';
const ServiceContent = ({ category, openCategoryModel, setModelText, setReplacementCartItem, services, subcategorys, incrementReplacedService, baseCart, mutateBaseCart}) => {

    const handleAddResponse = (response, service_id, setCartCount, openCategoryModel, setModelText, setReplacementCartItem) => {
        if (response.data.status && response.data.status === 'category_change'){
            console.log("Service Category Changed")
        }
        else{
            mutateBaseCart({...baseCart, ...response.data}, false)

        }
    }
    const addToCartHandler = (service_id, setCartCount) => {
        incrementReplacedService.current = setCartCount
        // addToCart(service_id, category, opencartegoryChangeModel, setModelHeaderText, setCartCount, updateCartReplacementItem)
        // addToCart(service_id, category, setCartCount, openCategoryModel, setModelText, setReplacementCartItem)
        axios.post('cart/add/', {service_id: service_id, category: category})
        .then(response => {
            handleAddResponse(response, service_id, setCartCount, openCategoryModel, setModelText, setReplacementCartItem)
        })
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
                            <Image src={BASE_URL + x.icon} width="60" height="60" alt="service_icon" className={style.img_image}/>
                        </div>
                        <div className={style.item_content}>
                            <h4>{x.name}</h4>
                            <span>&#8377;&nbsp;{x.price}</span>
                        </div>
                        <AddToCart forService={x} add={addToCartHandler} remove={removeFromCartHandler} cart={baseCart}/>
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

export default ServiceContent
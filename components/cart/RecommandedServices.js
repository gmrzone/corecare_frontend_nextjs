import { BASE_URL } from '../../data/_variables'
import { useRef } from 'react'
import style from '../../styles/cart/Cart.module.scss';
const RecommandedService = ({ data, loading , addToCartFromRecommanded, category }) => {
    const addedService = useRef()
    const renderRecommandedServices = data?.map(x => {
        const addToCart = (service_id) => {
            addedService.current = service_id
            addToCartFromRecommanded(service_id, category)
        }
        return (
            <div className={style.cart_recommanded_services__item} key={x?.id}>
                <div className={style.cart_item_image}>
                    <img src={BASE_URL + x?.icon} alt={x?.service?.name} width={60} height={60}/>
                </div>
                <div className={style.cart_item_content}>
                    <div className={style.cart_item_header}>{x?.name.length > 35 ? x?.name.substring(0, 32) + "..." : x?.name}</div>
                    <div className="cart-item-price">Rs. {x?.price}</div>
                </div>
                <div className={style.cart_item_action}>
                    <button className={`mini ui button secondary ${loading && x.id === addedService.current && "loading"}`} onClick={() => addToCart(x.id)}>
                        Add to cart
                    </button>
                </div>
            </div>
        )
    })
    return (
        <div className={style.cart_recommanded__outer}>
            <div className={style.cart_recommanded_services}>
                {renderRecommandedServices}
            </div>
        </div>
    )
}

// export default connect(null, { addToCartFromRecommanded })(RecommandedService)
export default RecommandedService
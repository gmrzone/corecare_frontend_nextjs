// import { connect } from 'react-redux'
// import { addToCart, removeFromCart, deleteServiceFromCart } from '../../actions'
import { BASE_URL } from '../../data/_variables'
import AddToCartButton from '../services/ServiceList/AddToCartButton'
// import dustBin from '../../images/dustbin.svg'
import style from '../../styles/cart/Cart.module.scss'
import image from 'next/image';
const CartTable = ({ cart, cartDetail }) => {


    const addToCartHandler = (service_id, setCartCount) => {
        addToCart(service_id, cartDetail.category, setCartCount)
    }
    const removeFromCartHandler = (service_id) => {
        removeFromCart(service_id)
    }
    const deleteService = (service_id) => {
        deleteServiceFromCart(service_id)
    }
    const rendertableRow = Object.values(cart).map(x => {
        
        return (
            <div className={style.cart_table_row} key={x.service.id}>
                <div className={style.cart_item_image}><Image src={BASE_URL + x.service.icon} alt={x.service.name} width="50" height="50"/></div>
                <div className={style.cart_item_content}>
                    <div className={style.cart_item_header}>{x.service.name}</div>
                    <div className={style.cart_item_price}>Rs. {x.service.price}</div>
                    <div className={style.cart_item_action}>
                        <div className={style.cart_item_quantity}><AddToCartButton forService={x.service} add={addToCartHandler} remove={removeFromCartHandler} cart={cart}/></div>
                        <div className={style.cart_item_remove} onClick={() => deleteService(x.service.id)}>
                            <Image src="/dustbin.svg" alt="delete" width="15" height="15"/>
                            <span>Remove</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className={style.cart_table_container}>
            {rendertableRow.length > 0 ? rendertableRow : <div className={style.empty_cart}><h2>Empty Cart</h2></div>}
        </div>
    )
}

// export default connect(null , { addToCart, removeFromCart, deleteServiceFromCart })(CartTable);
export default CartTable
/*
        <table className="ui celled padded table">
            <thead>
                <tr>
                    <th className="single line">Product</th>
                    <th className="single line">Price</th>
                    <th className="single line">Item Total</th>
                    <th className="single line">Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="">
                        <h2 className="ui center aligned header">Product 1</h2>
                    </td>
                    <td>
                        <div className="item-price">Rs 500</div>
                    </td>
                    <td>
                        <div className="item-total">Rs 1000</div>
                    </td>
                    <td>
                        <div className="ui star rating" data-rating="3s" data-max-rating="3"></div>
                    </td>
                </tr>
            </tbody>
        </table>
*/
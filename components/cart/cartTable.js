// import { connect } from 'react-redux'
// import { addToCart, removeFromCart, deleteServiceFromCart } from '../../actions'
import { BASE_URL } from '../../data/_variables'
import AddToCartButton from '../services/ServiceList/AddToCartButton'
// import dustBin from '../../images/dustbin.svg'
import style from '../../styles/cart/Cart.module.scss'
import Image from 'next/image';
import { BaseCartContext } from '../../context/basicCartContext'
import { DetailCartContext } from '../../context/detailCartContext'
import { useContext } from 'react'
import axios from '../../data/backendApi'
import { CsrfContext } from '../../context/CsrfTokenContext'
const CartTable = ({ cart, cartDetail }) => {
    const { csrfToken, mutateCsrf } = useContext(CsrfContext)
    const { baseCart, mutateBaseCart } = useContext(BaseCartContext)
    const { detailCartMutate } = useContext(DetailCartContext)

    const generateDetailCartState = (response) => {
        let newState = {cart: {}, cart_detail: {}}
        let subtotal = 0;
        Object.keys(response).forEach(x => {
            if (x in cart){
                newState.cart[x] = {...cart[x], ...response[x]}
                newState.cart[x]['total'] = response[x]['quantity'] * response[x]['price']
                newState.cart[x]['total'] = (Math.round(newState.cart[x]['total'] * 100) / 100).toFixed(2);
            }
            subtotal += response[x]['quantity'] * response[x]['price']
        })
        if (cartDetail.category){
            let discount;
            if (cartDetail.discount_percent){
                discount = subtotal * cartDetail.discount_percent / 100
            }
            else{
                discount = cartDetail.discount
            }
            subtotal = (Math.round(subtotal * 100) / 100).toFixed(2);
            let tax = subtotal * 5 / 100
            let cart_total = subtotal - discount + tax
            cart_total = (Math.round(cart_total * 100) / 100).toFixed(2);
            newState.cart_detail = {...cartDetail, ...{cart_subtotal: subtotal, tax: tax, total: cart_total, discount: discount}}
            return newState
        }
    }
    const handleResponse = (response, service_id, setCartCount) => {
        mutateBaseCart({...response}, false)
        mutateCsrf()
        const newState = generateDetailCartState(response)
        detailCartMutate(newState, false)

    }
    const addToCartHandler = (service_id, setCartCount) => {
        // addToCart(service_id, cartDetail.category, setCartCount)
        axios.post('cart/add/', {service_id , category: cartDetail.category, setCartCount}, {headers: {'X-CSRFToken': csrfToken}})
        .then(response => {
            handleResponse(response.data, service_id, setCartCount)
        })
    }
    const removeFromCartHandler = (service_id) => {
        axios.post('cart/remove/', {service_id , category: cartDetail.category}, {headers: {'X-CSRFToken': csrfToken}})
        .then(response => {
            handleResponse(response.data, service_id)
        })
    }
    const deleteService = (service_id) => {
        
        axios.post('cart/delete/', {service_id , category: cartDetail.category}, {headers: {'X-CSRFToken': csrfToken}})
        .then(response => {
            handleResponse(response.data, service_id)
        })
    }
    console.log(cart)
    const rendertableRow = Object.values(cart).map(x => {
        
        return (
            <div className={`${style.cart_table_row} ${x?.added ? style.added : ""}`} key={x.service.id}>
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
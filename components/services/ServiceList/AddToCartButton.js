import { useState } from 'react';
import style from '../../../styles/service/servicelist/AddToCartButton.module.scss';

const AddToCart = ({ forService , add, remove, cart={} }) => {
    const itemCount = forService?.id in cart ? cart[forService.id].quantity : 0
    const [cartCount, setCartCount] = useState(itemCount)
    const incrementCount = () => {
        setCartCount(c => c + 1)
        add(forService.id, setCartCount)
    }
    const decrementCount = () => {
        setCartCount(c => c - 1)
        remove(forService.id)
    }
    return (
        <div className={style.add_to_cart__counter}>
            {cartCount > 0 ? <span className={style.decrement_button} onClick={decrementCount}>-</span> : ""}
            {cartCount > 0 ? <span className={style.cart_item_count}>{cartCount}</span> : <span className={style.empty_item} onClick={incrementCount}>Add</span>}
            <span className={style.increment_button} onClick={incrementCount}>+</span>
        </div>
    )
}

export default AddToCart;
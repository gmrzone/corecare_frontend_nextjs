import style from '../../styles/cart/Cart.module.scss'
import { DetailCartContext } from '../../context/detailCartContext'
import { useContext } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import CartTable from './cartTable'
import CartSummery from './cartSummery'

const cartWrapper  = () => {
    const { detailCart, detailCartError, detailCartMutate } = useContext(DetailCartContext)
    return (
        <div className={`ui container ${style.shopping_cart_container}`}>
        {detailCart?.cart_detail?.total > 0 ? (
            <>  <h1 className={style.shopping_cart_title}>Shopping Cart</h1>
                <CartTable cart={detailCart['cart']} cartDetail={detailCart['cart_detail']}/>
                <CartSummery cart={detailCart}/>
            </>
        ) : (
            <div className={style.empty_cart}>
                <h1>Your Cart is Currently Empty.</h1>
                {/* <img src="/emptycart.png" alt="empty_cart" width={120}/> */}
                <Image src="/emptycart.png" alt="empty_cart" width="120" height="120"/>
                <p>Your Cart is Empty Please add some items to your cart</p>
                <Link href="/">
                    <a className="positive ui button">Return To Shop</a>
                </Link>
            </div>
        )}
        <style jsx>{`
            .ui.container {
                display: ${detailCart?.cart_detail?.total > 0 ? "grid" : "block"}
            }
        `}</style>
    </div>
    )
}

export default cartWrapper
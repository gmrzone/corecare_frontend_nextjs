import style from '../styles/cart/Cart.module.scss'
// import { useEffect } from 'react'
// import { connect } from 'react-redux'
// import { getDetailCart } from '../../actions'
import CartTable from '../components/cart/cartTable';
import CartSummery from '../components/cart/cartSummery'
// import cart_empty from '../../images/emptycart.png'
import Link from 'next/link';
import Image from 'next/image'
import Layout from '../components/common/Layout';
import MetaComponent from '../components/common/MetaComponent'
import {frontend_base} from '../data/_variables'

export const getServerSideProps = async (context) => {
    const BASE_URL = process.env['API_BASE_URL']
    const responese = await fetch(`${BASE_URL}cart/get/detail/`)
    const data = await responese.json()
    // const detailCart = {
    //     cart: {}, 
    //     cart_detail: {}
    // }
    // let subtotal = 0
    // Object.keys(data).forEach(x => {
    //     detailCart.cart[x] = data[x]
    //     detailCart.cart[x]['total'] = data[x]['quantity'] * data[x]['price']
    //     subtotal += data[x]['quantity'] * data[x]['price']
    // })
    return {
        props: {
            detailCart: data
        }
    }
}
const Cart = ({ detailCart, mobileNav }) => {

    // useEffect(() => {
    //     getDetailCart()
        
    // }, [getDetailCart])

    return(
        <>
            <MetaComponent title="Cart" description="Detailed cart page" name="cart Page" url={`${frontend_base}cart`}/>
            <Layout mobileNav={mobileNav}>
            {console.log(detailCart)}
                <div className={`ui container ${style.shopping_cart_container}`}>
                    {detailCart.cart_detail?.total > 0 ? (
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
            </Layout>
        </>
    )
}
// const mapStateToProps = (state) => {
//     return {
//         detailCart: state.detailCart
//     }
// }
// export default connect(mapStateToProps, { getDetailCart })(Cart)

export default Cart
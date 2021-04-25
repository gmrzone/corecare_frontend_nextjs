import style from '../styles/cart/Cart.module.scss'
// import { useEffect } from 'react'
// import { connect } from 'react-redux'
// import { getDetailCart } from '../../actions'
import CartTable from '../components/cart/cartTable';
import CartSummery from '../components/cart/cartSummery'
// import cart_empty from '../../images/emptycart.png'

import Layout from '../components/common/Layout';
import MetaComponent from '../components/common/MetaComponent'
import {frontend_base} from '../data/_variables'
import { DetailCartProvider } from '../context/detailCartContext'
import CartWrapper from '../components/cart/cartWrapper'
// export const getServerSideProps = async (context) => {
//     const BASE_URL = process.env['API_BASE_URL']
//     const responese = await fetch(`${BASE_URL}cart/get/detail/`)
//     const data = await responese.json()
//     // const detailCart = {
//     //     cart: {}, 
//     //     cart_detail: {}
//     // }
//     // let subtotal = 0
//     // Object.keys(data).forEach(x => {
//     //     detailCart.cart[x] = data[x]
//     //     detailCart.cart[x]['total'] = data[x]['quantity'] * data[x]['price']
//     //     subtotal += data[x]['quantity'] * data[x]['price']
//     // })
//     return {
//         props: {
//             detailCart: data
//         }
//     }
// }
const Cart = ({ mobileNav, detailCart }) => {

    // useEffect(() => {
    //     getDetailCart()
        
    // }, [getDetailCart])
    return(
        <>
            <MetaComponent title="Cart" description="Detailed cart page" name="cart Page" url={`${frontend_base}cart`}/>
            <DetailCartProvider>
                <Layout mobileNav={mobileNav}>
                    <CartWrapper />
                </Layout>
            s</DetailCartProvider>
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
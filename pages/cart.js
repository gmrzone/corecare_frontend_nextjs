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

const Cart = ({ mobileNav }) => {

    return(
        <>
            <MetaComponent title="Cart" description="Detailed cart page" name="cart Page" url={`${frontend_base}cart`}/>
            <DetailCartProvider>
                <Layout mobileNav={mobileNav}>
                    <CartWrapper />
                </Layout>
            </DetailCartProvider>
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
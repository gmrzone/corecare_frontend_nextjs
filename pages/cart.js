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
import UpdateProfileModal from '../components/cart/updateProfileModel'
import { useState, useRef } from 'react'
import PayButtonContext from '../context/PayButtonContext'
import { DetailCartRecommanderProvider } from '../context/DetailServiceRecommander'

const Cart = ({ mobileNav }) => {
    const [profileUpdateModal, setProfileUpdateModal] = useState(false)
    const payButton = useRef()
    return(
        <>
            <MetaComponent title="Cart" description="Detailed cart page" name="cart Page" url={`${frontend_base}cart`}/>
            <DetailCartProvider>
                    <Layout mobileNav={mobileNav} Modal={UpdateProfileModal} modalProps={{active: profileUpdateModal, setActive: setProfileUpdateModal, payButton: payButton}}>
                        <DetailCartRecommanderProvider>
                            <PayButtonContext.Provider value={{ payButton, setProfileUpdateModal }}>
                                <CartWrapper mobileNav={mobileNav}/>
                            </PayButtonContext.Provider>
                        </DetailCartRecommanderProvider>
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
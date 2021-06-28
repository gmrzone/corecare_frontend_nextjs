import CouponBox from './CouponBox';
// import { connect } from 'react-redux'
import Link from 'next/link'; 
import style from '../../styles/cart/Cart.module.scss'
import { useState, useEffect, useContext } from 'react'
import PayButtonContext from '../../context/PayButtonContext'
// import { createRazorPayOrder, createOrder } from '../../actions';
import UpdateProfileModel from './updateProfileModel';
import {} from 'react'
import { AuthContext } from '../../context/AuthContext';
import DjangoApi from '../../data/backendApi'
import { useRouter } from 'next/router'
import { CsrfContext } from '../../context/CsrfTokenContext'
const CartSummary = ({ cart }) => {
    const { csrfToken, mutateCsrf } = useContext(CsrfContext)
    const {loginStatus} = useContext(AuthContext)
    // const history = useHistory()
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
            var meta = document.createElement('meta')
            meta.name = "viewport"
            meta.content = "width=device-width, initial-scale=1.0"
            document.head.appendChild(meta)
        }
    }, [])
    const { payButton: razorPayButton, setProfileUpdateModal } = useContext(PayButtonContext)
    const [orderStatus, setOrderStatus] = useState({error: null, error_code: null, order_status: null, order_detail: null, order_receipt: null})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    // const [updateProfileModel, setUpdateProfileModel] = useState(false)
    const router = useRouter()
    const renderItem = Object.values(cart.cart).map(x => {
       return (
           <div key={x.service.id} className={style.cart_summery_item}>
               <span>{x.service.name} x {x.quantity}</span>
               <span>{x.total} &#8377;</span>
           </div>
       ) 
    })

    const razorPayHandleOrder = (amount, receipt, id, user, notes) => {
        var options = {
            'key': 'rzp_test_Fz30Ps4aOA4Zke',
            'amount': amount,
            "currency": "INR",
            "name": 'Corecare',
            "description": `${receipt}`,
            // 'image': razorPayCorecare,
            "order_id": id,
            "handler": function (response){
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature)
                // RazorPay success callback create a order inside django rest api
                DjangoApi.post("cart/create-orders/", response, {headers: {'X-CSRFToken': csrfToken}})
                .then(response => {
                    if (response.data.status === "ok"){
                        router.push(`orders/${response.data['receipt']}/`)
                       
                    }
                    else{
                        setError(true)
                    }
                    mutateCsrf()
                })
                .catch(e => {
                    console.log(e)
                })

            },
            "prefill": {
                "name": user['name'],
                "email": user['email'],
                "contact": user['number']
            },
            "notes": {
                "address": notes
            },
            "theme": {
                "color": "#1B1C1D"
            }

        }
        var rzpay = new window.Razorpay(options)
        rzpay.on('payment_failed', function(response){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        })
        rzpay.open()
    }

    const createRazorPayOrder = () => {
        DjangoApi.post('cart/create-razorpay-orders/', {}, {headers: {'X-CSRFToken': csrfToken}})
        .then(response => {
            if (response.data.status === "error" && response.data.msg ==='address_error'){
                console.log("update Profile")
                setProfileUpdateModal(true)
            }
            else if (response.data.status === "ok"){
                setOrderStatus(state => {
                    return {...state, error: false, error_code: null, order_status: 'success', order_detail: response.data['order_details'], order_receipt: response.data['receipt']}
                })
                const amount = response.data.order_details['amount']
                const receipt =response.data['receipt']
                const id = response.data.order_details['id']
                const user = response.data.user
                const notes = response.data.notes
                razorPayHandleOrder(amount, receipt, id, user, notes)
            }
            setLoading(false)
            mutateCsrf()
         })
         .catch(e => {
             console.log(e)
         })
    }

    const completeOrder = (e) => {
        setLoading(true)
        e.preventDefault();
        createRazorPayOrder()
    }


    return (
        <div className={style.cart_summary_container}>
            {/* <UpdateProfileModel active={updateProfileModel} setActive={setUpdateProfileModel} payButton={razorPayButton}/> */}
            <div className={style.cart_summary_header}><h3>CART SUMMARY</h3></div>
            <div className="ui divider" style={{marginTop:"0px"}}></div>
            <div className={style.cart_summary_content}>
                <div className="cart-content">
                    {renderItem}
                </div>
                <div className="ui divider"></div>
                {/* {orderStatus & null} */}
                <div className={style.order_total}>
                    <div className={style.summary_total}>
                        <span>Subtotal</span>
                        <span>{cart.cart_detail.cart_subtotal} &#8377;</span>
                    </div>
                    <div className={style.summary_total}>
                        <span>Tax @5%</span>
                        <span style={{color: "red"}}>{cart?.cart_detail?.tax > 0 ? '+ ' + cart?.cart_detail?.tax : cart?.cart_detail?.tax} &#8377;</span>
                    </div>
                    <div className={style.summary_total}>
                        <span>Discount</span>
                        <span style={{color: "red"}}>{cart.cart_detail.discount > 0 ? "- " + cart.cart_detail.discount : cart.cart_detail.discount} &#8377;</span>
                    </div>
                    <div className={style.summary_total}>
                        <span>Total</span>
                        <span>{cart.cart_detail.total} &#8377;</span>
                    </div>
                    <div className="ui divider"></div>
                    <div className={style.summary_total}>
                        <span>Coupon Applied</span>
                        <span>{cart.cart_detail.coupon || "None"}</span>
                    </div>
                    <div className={style.summary_total}>
                        <span>Discount %</span>
                        <span>{cart.cart_detail.discount_percent || 0} %</span>
                    </div>
                </div>
            </div>
            <CouponBox />
            {error && <div className="ui small message red" style={{borderRadius: '0px', border: 'none', outline: 'none', boxShadow: 'none', borderTop: '1px solid red', borderBottom: '1px solid red'}}>
                There was a problem processing your order. If payment is deducted from your payment method then it will be refunded within 7 business days.
            </div>}
            <div className={style.cart_summary_action}>
                {loginStatus ? <button className={`ui secondary button rzp-button1 ${loading && "loading"}`} onClick={completeOrder} ref={razorPayButton}>Checkout</button> : <Link href="/login"><a className="ui secondary button">Login To Continue</a></Link>}
            </div>

        </div>
    )
}
// const mapStateToProps = (state) => {
//     return {
//         loginStatus : state.Authentication.loginStatus,
//         userDetails: state.Authentication
//     }
// }
// export default connect(mapStateToProps, { createRazorPayOrder, createOrder })(CartSummary);

export default CartSummary;
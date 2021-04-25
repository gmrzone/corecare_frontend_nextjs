import CouponBox from './CouponBox';
// import { connect } from 'react-redux'
import Link from 'next/link'; 
import style from '../../styles/cart/Cart.module.scss'
import { useState, useEffect, useRef } from 'react'
// import { createRazorPayOrder, createOrder } from '../../actions';
import UpdateProfileModel from './updateProfileModel';
// import { useHistory } from 'react-router-dom'
const CartSummary = ({ cart, loginStatus }) => {
    // const history = useHistory()
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
    }, [])
    const razorPayButton = useRef()
    const [ orderStatus, setOrderStatus] = useState({error: null, error_code: null, order_status: null, order_detail: null, order_receipt: null})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [updateProfileModel, setUpdateProfileModel] = useState(false)
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
                // RazorPay success callbace create a order inside django rest api
                createOrder(response, history, setError)
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
    const completeOrder = (e) => {
        setLoading(true)
        e.preventDefault();
        createRazorPayOrder(setOrderStatus, razorPayHandleOrder, setLoading, setUpdateProfileModel)
    }


    return (
        <div className={style.cart_summary_container}>
            <UpdateProfileModel active={updateProfileModel} setActive={setUpdateProfileModel} payButton={razorPayButton}/>
            <div className={style.cart_summary_header}><h3>CART SUMMARY</h3></div>
            <div className="ui divider" style={{marginTop:"0px"}}></div>
            <div className={style.cart_summary_content}>
                <div className="cart-content">
                    {renderItem}
                </div>
                <div className="ui divider"></div>
                {orderStatus & null}
                <div className={style.order_total}>
                    <div className={style.summary_subtotal}>
                        <span>Subtotal</span>
                        <span>{cart.cart_detail.cart_subtotal} &#8377;</span>
                    </div>
                    <div className="summary-discount" style={{color: "red"}}>
                        <span>Discount</span>
                        <span>{cart.cart_detail.discount > 0 ? -cart.cart_detail.discount : cart.cart_detail.discount} &#8377;</span>
                    </div>
                    <div className="summary-total">
                        <span>Total</span>
                        <span>{cart.cart_detail.total} &#8377;</span>
                    </div>
                    <div className="ui divider"></div>
                    <div className="summary-coupon-code">
                        <span>Coupon Applied</span>
                        <span>{cart.cart_detail.coupon || "None"}</span>
                    </div>
                    <div className="summary-discount-percent">
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
                {loginStatus ? <button className={`ui secondary button rzp-button1 ${loading && "loading"}`} onClick={completeOrder} ref={razorPayButton}>Checkout</button> : <Link to="/login" className="ui secondary button">Login To Continue</Link>}
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
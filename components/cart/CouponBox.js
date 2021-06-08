import { useState, useContext } from 'react'
import style from '../../styles/cart/Cart.module.scss'
import axios from '../../data/backendApi'
import { DetailCartContext } from '../../context/detailCartContext';
import { CsrfContext } from '../../context/CsrfTokenContext'
const CouponBox = () => {
    const { csrfToken, mutateCsrf } = useContext(CsrfContext)
    const { detailCartMutate } = useContext(DetailCartContext)
    const [couponValue, setCouponValue] = useState("")
    const [coupon, setCoupon] = useState({loading: false, error: false, mssg: ""})
    const handleCouponResponse = (response, setCouponState) => {
        if (response.data.status === "invalid_coupon" || response.data.status === 'category_error'){
            setCouponState({loading: false, error: true, mssg: response.data.msg})
        }
        else{
            detailCartMutate(response.data, false)
            setCouponState({loading: false, error: false, mssg: "Coupon Applied!!"})
        }
    }
    const handleCouponApply = () => {
        if (couponValue === ""){
            setCoupon({loading: false, error: true, mssg: "No Coupon Applied"})
        }
        else{
            setCoupon({loading: true, error: false, mssg: ""})
            axios.post('cart/coupon/apply/', {coupon_code: couponValue}, {headers: {'X-CSRFToken': csrfToken}})
            .then(response => {
                handleCouponResponse(response, setCoupon)
                mutateCsrf()
            })
        }
        
    }
    return (
        <div className={style.cart_coupon_apply}>
        <div className="ui action input">
            <input type="text" value={couponValue} placeholder="Apply Coupon" onChange={(e) => setCouponValue(e.target.value)}/>
            <button className={`ui teal right labeled icon button ${coupon.loading ? "loading" : ""}`} onClick={handleCouponApply}>
                <i className="cart icon"></i>
                Apply
            </button>
        </div>
        <div className={`ui mini ${coupon.error ? "red" : "green"} message`} style={{display: coupon.mssg ? "block" : 'none'}}>{coupon.mssg}</div>
    </div>
    )
}

// export default connect(null, { applyCoupon })(CouponBox)
export default CouponBox
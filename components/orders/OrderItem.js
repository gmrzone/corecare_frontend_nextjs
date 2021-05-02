import Link from 'next/link'
import style from '../../styles/orders/Orders.module.scss'
const OrderItem = ({ order }) => {
    // const renderOrderItems = order.items.map(x => {
    //     return (
    //         <div className="event" key={x.service.id}>
    //             <div className="summary">
    //                 {x.service.name}
    //             </div>
    //         </div>
    //     )
    // })
    return (
        <div className='ui card fluid' style={{position: 'relative', overflow: 'hidden'}}>
            <div className={`${style.payment_status} ${order.paid ? style.paid : style.unpaid}`}>{order.paid ? "Paid" : "Unpaid"}</div>
            <div className="content">
                <h4 className="">ID: {order.receipt}</h4>
                <div className="meta">
                    {/* <span className="date">&#8377;{order.total}</span> */}
                    <span>Fullfill by : {order.fullfill_by}</span>
                </div>
                <h4 className="">Order Details</h4>
                <div className="">
                    <div className="event">
                        <div className="summary">
                            Coupon Applied : {order?.coupon?.code ? order.coupon.code : "No Coupon Applied"}
                        </div>
                    </div>
                    <div className="event">
                        <div className="summary">
                            Discount Percent : {order?.coupon?.discount ? order.coupon?.discount + "%" : "0%"}
                        </div>
                    </div>
                    <div className="event">
                        <div className="summary">
                            Total : &#8377;{order.total}
                        </div>
                    </div>
                </div>
            </div>
            <div className="extra content">
                <Link href={`order/${order.receipt}`}>
                    <a className="ui button secondary">View Order</a>
                </Link>
            </div>
        </div>
    )
}

export default OrderItem
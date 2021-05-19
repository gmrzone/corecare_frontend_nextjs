import Layout from '../../components/common/Layout'
import MetaComponent from '../../components/common/MetaComponent'
import { useRouter } from 'next/router'
import { frontend_base } from '../../data/_variables'
import axios from '../../data/backendApi'
import useSWR from 'swr'
import style from '../../styles/orders/OrderStatus.module.scss'
import TextPlaceHolder from '../../components/order/TextPlaceholder'
import Card from '../../components/order/Card'

const OrderDetail = ({ mobileNav }) => {
    const router = useRouter()
    const order_id = router.query['order_id']
    const shouldFetch = order_id ? true : false
    const fetcher = (...args) => axios.get(...args).then(response => response.data)
    const { data: current_order, error } = useSWR(shouldFetch ? `orders/${order_id}/` : null, fetcher)
    const loading = !current_order && !error
    const renderOrderItem = current_order ? current_order.items.map((x, i) => {
        return (
            <tr key={i}>
                <td>{x.service.name}</td>
                <td>&#8377;{x.service.price * x.quantity}</td>
            </tr>
        )
    }) : null
    return (
        <>
            <MetaComponent title={`Order ${order_id}`} description="Customers Order list page" name="Orders" url={`${frontend_base}orders`}/>
            <Layout mobileNav={mobileNav}>
                    <div className={"ui container " + style.order_status_container}>
                    <img src="/order-complete.svg" alt="order-complete" className={style.order_complete_image}/>
                    <h1>Order Placed Successfully</h1>
                    <p className={style.order_status_description}>{`Thank you, your paymant has been successfull. Invoice for your order ${order_id} has been generated and sent to your email id ${current_order?.user?.email || "---------------------"}`}</p>
                        <div className={style.order_details__cont}>
                            <div className={style.order_details_tables}>
                                {!loading ? (<table className={`ui celled table fixed table-one ${style.table_one}`}>
                                    <tfoot>
                                        <tr>
                                            <td>ORDERID</td>
                                            <td>{current_order?.receipt}</td>
                                        </tr>
                                        <tr>
                                            <td>Coupon Applied</td>
                                            <td>{current_order?.coupon?.code ? current_order?.coupon.code : "No Coupon Applied"}</td>
                                        </tr>
                                        <tr>
                                            <td>Discount %</td>
                                            <td>{current_order?.coupon?.discount ? current_order?.coupon?.discount : 0}%</td>
                                        </tr>
                                        <tr>
                                            <td>Payment Status</td>
                                            <td>{current_order?.paid ? "Paid" : "Pending"}</td>
                                        </tr>
                                        <tr>
                                            <td>Status</td>
                                            <td>{current_order?.status}</td>
                                        </tr>
                                    </tfoot>
                                </table>) : <TextPlaceHolder paragraph={4} className={style.table_one}/>}
                                {!loading ? (<table  className={`ui celled table fixed ${style.table_two}`}>
                                    <tbody>
                                    <tr>
                                        <td colSpan="2">Order Items</td>
                                    </tr>
                                        {renderOrderItem}
                                        <tr>
                                            <td>Subtotal</td>
                                            <td>&#8377;{current_order?.subtotal}</td>
                                        </tr>
                                        <tr>
                                            <td>Discount</td>
                                            <td>&#8377;{current_order?.discount}</td>
                                        </tr>
                                        <tr>
                                            <td>Total</td>
                                            <td>&#8377;{current_order?.total}</td>
                                        </tr>
                                    </tbody>
                                </table>) : <TextPlaceHolder paragraph={4} className={style.table_two}/>}
                            </div>
                            <div className="ui divider"></div>
                            <div className="order-details__info ui cards">
                                {!loading ? (<Card header="Service Address" description={`${current_order?.user.address_1} ${current_order?.user.address_2} ${current_order?.user.city} ${current_order?.user.state} ${current_order?.user.pincode}`}/>) : <TextPlaceHolder paragraph={1} className="card"/>}
                                {!loading ? (<Card header="Estimate Complete Date" description={current_order?.fullfill_by} meta="Elapsed"/>) : <TextPlaceHolder paragraph={1} className="card"/>}
                                {/* <div className="order-fullfillment">
                                    <h3>Estimate Complete Date</h3>
                                    <p>{current_order.fullfill_by}</p>
                                </div> */}
                            </div>
                        </div>
                </div>
            </Layout>
        </>
    )
}

export default OrderDetail
import { useEffect } from 'react';
// import { retriveUserOrders } from '../../actions';
// import { connect } from 'react-redux';
import PointerMenu from '../../components/orders/PointerMenu';
import { OrderContextProvider } from '../../context/OrdersContext'
import style from '../../styles/orders/Orders.module.scss'
import Layout from '../../components/common/Layout'
import MetaComponent from '../../components/common/MetaComponent'
import { frontend_base } from '../../data/_variables'
const Order = ({ mobileNav}) => {
    return(
        <>
        <MetaComponent title="Orders" description="Customers Order list page" name="Orders" url={`${frontend_base}orders`}/>
        <Layout mobileNav={mobileNav}>
        <OrderContextProvider>
            <div className={"ui container " + style.orders_container__user}>
                <h1>Order</h1>
                <div className={style.order_menu}>
                    <PointerMenu />
                </div>
            </div>
        </OrderContextProvider>
        </Layout>
        </>
    )
}
// const mapStateToProps = (state) => {
//     const allOrders = state.orders
//     let pendingOrders = [];
//     let cancelledOrders = [];
//     let completedOrders = [];
//     allOrders.forEach(element => {
//         if (element.status === 'pending'){
//             pendingOrders.push(element)
//         }
//         else if (element.status === 'cancelled'){
//             cancelledOrders.push(element)
//         }
//         else if (element.status === 'completed'){
//             completedOrders.push(element)
//         }
//     });
//     return {
//         allOrders: allOrders,
//         cancelledOrders: cancelledOrders,
//         pendingOrders: pendingOrders,
//         completedOrders: completedOrders
//     }
// }
// export default connect(mapStateToProps, { retriveUserOrders })(Order)

export default Order
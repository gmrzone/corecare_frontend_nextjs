import { useEffect } from 'react';
import { retriveUserOrders } from '../../actions';
import PointerMenu from './PointerMenu';
import './order.css'
const Orders = () => {

    const menuItems = [
        {   
            'name': 'All',
            'data': allOrders
        },
        {   
            'name': 'Done',
            'data': completedOrders
        },
        {   
            'name': 'Pending',
            'data': pendingOrders
        },
        {
            'name': 'Cancelled',
            'data': cancelledOrders
        }
    ]
    return(
        <div className="containerAF max-width orders-container__user">
            <h1>Order</h1>
            <div className="order-menu">
                <PointerMenu menuItems={menuItems}/>
            </div>
        </div>
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
export default Orders
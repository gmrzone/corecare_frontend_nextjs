import OrderItem from './OrderItem'
const OrderList = ({ orders }) => {
    const renderOrders = orders.map(x => {
        return <OrderItem order={x} key={x.id}/>
    })
    return (
        <div className="ui cards">
            {orders ? renderOrders : <p>Empty</p>}
        </div>
    )
}

export default OrderList
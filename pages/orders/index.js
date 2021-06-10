
import PointerMenu from '../../components/orders/PointerMenu';
import { OrderContextProvider } from '../../context/OrdersContext'
import style from '../../styles/orders/Orders.module.scss'
import Layout from '../../components/common/Layout'
import MetaComponent from '../../components/common/MetaComponent'
import { frontend_base } from '../../data/_variables'
import PrivatePage from '../../components/HOC/PrivatePage'
const Order = ({ mobileNav}) => {
    return(
        <>
        <MetaComponent title="Orders" description="Customers Order list page" name="Orders" url={`${frontend_base}orders`}/>
        <Layout mobileNav={mobileNav}>
        <OrderContextProvider>
            <div className={"ui container " + style.orders_container__user}>
                <h1>Orders</h1>
                <div className={style.order_menu}>
                    <PointerMenu />
                </div>
            </div>
        </OrderContextProvider>
        </Layout>
        </>
    )
}

export default PrivatePage(Order)
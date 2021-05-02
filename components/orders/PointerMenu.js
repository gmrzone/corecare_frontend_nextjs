import { useState } from 'react';
import OrderList from './OrderList'
import { OrdersContext } from '../../context/OrdersContext'
import { useContext } from 'react'
import style from '../../styles/orders/Orders.module.scss'
const PointerMenu = () => {
    const [activeTab, setActiveTab] = useState('All')
    const { loading, menuItems } = useContext(OrdersContext)
    const renderMenuItems = [];
    const renderMenuSegments = [];
    
    menuItems?.forEach((x, i) => {
        renderMenuItems.push((
            <span className={`item ${x.name === activeTab && "active"}`} style={{cursor: 'pointer'}} key={i} onClick={() => setActiveTab(x.name)}>
                {x.name}
            </span>
        ))
        if (x?.data?.length > 0 && x.name === activeTab){
            renderMenuSegments.push((
                <OrderList orders={x.data} key={i}/>
        ))
            }
        else if (x?.data?.length === 0 && x.name === activeTab){
            renderMenuSegments.push((
                <p key={i}>There is no {x.name === 'Done' ? "Completed" : x.name} Orders.</p>
            ))
        }
        

    })
    return (
        <>
            <div className={"ui pointing menu " + style.hover}>
                {renderMenuItems}
            </div>
            <div className="ui segment">
                {renderMenuSegments}
            </div>
        </>
    )
}

export default PointerMenu

import Model from '../../common/Modal';
import Link from 'next/link';
import axios from '../../../data/backendApi'
import { BaseCartContext } from '../../../context/basicCartContext'
import { useContext } from 'react'
const categoryChangeModel = (props) => {
    const {category, replacementItem: service_id} = props
    const { mutateBaseCart } = useContext(BaseCartContext)
    const replaceCart = () => {
        // props.clearCart()
        // props.addToCart(props.replacementItem, props.category)
        // props.replaceCart(props.replacementItem, props.category, props.closeModel, props.incrementReplacedService.current)
        axios.get('cart/clear/')
        .then(response => {
            if (response.data.status === 'ok'){
                axios.post('cart/add/', {service_id: service_id, category: category})
                .then(response => {
                    mutateBaseCart({...response.data}, false)
                })
            }
        })
    }
    return (
        <Model header={props.header} active={props.modelActive} closeModel={() => props.closeModel()} zIndex="5000">
            <div className="ui message">
                <p>Cart cannot contain items from multiple Category. Either Complete the current Cart Order or Replace Your Cart with different Category.</p>
            </div>
            <div style={{textAlign: 'right'}}>
                <button className="ui positive right labeled icon button" onClick={replaceCart}>
                    Replace Cart
                    <i className="checkmark icon"></i>
                </button>
                <Link href="/cart">
                    <a className="ui secondary button">Cart</a>
                </Link>
            </div>
        </Model>
    )
}

// export default connect(null, { replaceCart })(categoryChangeModel)
export default categoryChangeModel
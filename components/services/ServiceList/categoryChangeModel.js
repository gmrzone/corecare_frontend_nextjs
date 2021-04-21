import Model from '../../common/Modal';
import Link from 'next/link';
// import { replaceCart } from '../../../../actions'
// import { connect } from 'react-redux'
const categoryChangeModel = (props) => {
    const replaceCart = () => {
        // props.clearCart()
        // props.addToCart(props.replacementItem, props.category)
        props.replaceCart(props.replacementItem, props.category, props.closeModel, props.incrementReplacedService.current)

    }
    return (
        <Model header={props.header} active={props.modelActive} closeModel={() => props.closeModel()} zIndex="5000">
            <div className="ui message">
                {/* <div className="header">
                    Cart cannot contain items from multiple Category
                </div> */}
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
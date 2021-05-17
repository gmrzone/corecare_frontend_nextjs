import style from '../../styles/cart/Cart.module.scss'
import { DetailCartContext } from '../../context/detailCartContext'
import { useContext } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import CartTable from './cartTable'
import CartSummery from './cartSummery'
import { DetailRecommanderContext } from '../../context/DetailServiceRecommander';
import RecommandedServices from './RecommandedServices'

const cartWrapper  = ({ mobileNav }) => {
    const { detailCart, detailCartError, detailCartMutate } = useContext(DetailCartContext)
    const { detailRecommandation, mutateDetailRecommander, loading } = useContext(DetailRecommanderContext)
    const calculateRecommandation = () => {
        if (detailRecommandation?.length <= 4){
            return detailRecommandation
        }
        else{
            if (mobileNav){
                return detailRecommandation
            }
            else {
                if (typeof window !== 'undefined' && window?.innerWidth >= 1280){
                    return detailRecommandation?.slice(0, 5)
                }
                return detailRecommandation?.slice(0, 4)
            }
        }
    }
    return (
        <>
        <div className={style.recommanded_services_outer}>
            <div className={style.recommanded_services + " ui container"}>
                <h1 className={style.shopping_cart_title}>Recommended Services</h1>
                <RecommandedServices data={calculateRecommandation()} loading={loading} category={detailCart?.cart_detail.category}/>
            </div>
        </div>
        <div className={`ui container ${style.shopping_cart_container}`}>
        {detailCart?.cart_detail?.total > 0 ? (
            <>  <h1 className={style.shopping_cart_title}>Shopping Cart</h1>
                <CartTable cart={detailCart['cart']} cartDetail={detailCart['cart_detail']}/>
                <CartSummery cart={detailCart}/>
            </>
        ) : (
            <div className={style.empty_cart}>
                <h1>Your Cart is Currently Empty.</h1>
                {/* <img src="/emptycart.png" alt="empty_cart" width={120}/> */}
                <Image src="/emptycart.png" alt="empty_cart" width="120" height="120"/>
                <p>Your Cart is Empty Please add some items to your cart</p>
                <Link href="/">
                    <a className="positive ui button">Return To Shop</a>
                </Link>
            </div>
        )}
        <style jsx>{`
            .ui.container {
                display: ${detailCart?.cart_detail?.total > 0 ? "grid" : "block"}
            }
        `}</style>
    </div>
    </>
    )
}

export default cartWrapper
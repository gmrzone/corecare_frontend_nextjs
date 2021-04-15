import SliderWrapper from '../common/SliderWrapper'
import style from '../../styles/home/Home.module.scss'
import { useEffect } from 'react'

const ReviewSlider = (props) => {
    // const { getReview } = props
    // useEffect(() => {
    //     getReview()
    // }, [getReview])
    return (
        <div className={style.review_content_container}>
            <div className={style.inner_review_content + " ui container"}>
                <div className={style.review_content_heading}>
                    <h1 className={style.review_title}>Customer safety is our Priority</h1>
                    <p className={style.review_subs}>What Customers are saying about our saftey standards</p>
                </div>
                <SliderWrapper bgColor="black" image={false} data={props.data} mobileNav={props.mobileNav} />
            </div>
        </div>
    )
}


export default ReviewSlider
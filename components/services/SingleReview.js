// import 'antd/dist/antd.css';
// import Rate from 'antd/lib/rate'
import style from '../../styles/service/SingleReview.module.scss'
import CreateReply from './createReview'
import {useState} from 'react';
// import { connect } from 'react-redux'
import Image from 'next/image'
import StarRating from '../common/StarRating'

const SingleReview = ({ BASEURL, review, renderReviewReply, isReply, authenticated }) => {
    const [replyActive, setReplyActive] = useState(false)
    const toggleReply = () => {
        setReplyActive(!replyActive)
    }
    return (
        <div className={style.comment_wrapper}>
        <div className={"comment " + style.comment_imp}>
            <span className={"avatar " + style.avatar_imp}>
                {/* <img src={BASEURL + review.user.photo} alt="employee"/> */}
                <Image src={BASEURL + review.user.photo} layout="fill" objectFit="cover" alt="employee" className={style.avatar_img}/>
            </span>
            <div className={"content " + style.content_imp}>
                <span className="author">{review.user.username || review.user.email || review.user.number}</span>
                <div className="metadata">
                    <span className={"date " + style.date_span}>{review.created.trim()}</span>
                </div>
                {/* <Rate disabled defaultValue={review.star} /> */}    
                <StarRating rating={review.star}/>
                <div className="text">
                    {review.review}
                </div>
                {!isReply && authenticated ? <div className="actions">
                    <span className={"reply " + style.reply_span} onClick={toggleReply}>Reply</span>
                </div> : ""}
                {!isReply && replyActive && authenticated ? <CreateReply parent={review.id} isReply="True" /> : ""}
            </div>
            {review.replies.length > 0 && !isReply ? renderReviewReply(review.replies) : ""}
        </div>
        </div>
    )
}
// const mapStateToProps = (state) => {
//     return {
//         authenticated: state.Authentication.loginStatus
//     }
// }
// export default connect(mapStateToProps)(SingleReview)

export default SingleReview
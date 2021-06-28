// import 'antd/dist/antd.css';
// import Rate from 'antd/lib/rate'
import style from '../../styles/service/SingleReview.module.scss'
import CreateReply from './createReview'
import {useState} from 'react';
// import { connect } from 'react-redux'
import Image from 'next/image'
import StarRating from '../common/StarRating'
import { BASE_URL } from '../../data/_variables';
import axios from '../../data/backendApi'


const SingleReview = ({ review, renderReviewReply, isReply, authenticated, replyActiveFor, toggleReply }) => {
    const replyCount = review.replies.length
    const [replyList, setReplyList] = useState({active: false, data: null})

    const toggleReplyList = () => {
        if (replyList.data){
            setReplyList(s => {
                return {...s, active: !replyList.active}
            })
        }
        else{
            axios.get(`get_replies/v2/${review.id}/`)
            .then(response => {
                setReplyList({active: !replyList.active, data: response.data})
            })
        }
    }
    return (
        <div className={style.comment_wrapper}>
        <div className={"comment " + style.comment_imp}>
            <span className={"avatar " + style.avatar_imp}>
                {/* <img src={BASEURL + review.user.photo} alt="employee"/> */}
                <Image src={review.user.photo.startsWith("h") ? review.user.photo : BASE_URL + review.user.photo} layout="fill" objectFit="cover" alt="employee" className={style.avatar_img}/>
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
                    <span className={"reply " + style.reply_span} onClick={() => toggleReply(review.id)}>Reply</span>
                </div> : ""}
                {!isReply && replyActiveFor === review.id && authenticated ? <CreateReply parent={review.id} isReply="True" /> : ""}
            </div>
            {/* {review.replies.length > 0 && <div className="comments" style={{marginLeft: "30px"}}>
                {review.replies.length > 0 && !isReply ? renderReviewReply(review.replies) : ""}
            </div>} */}
            {replyCount > 0 && (
                <div className={style.show_reply}>
                    <span className={style.show_reply_link} onClick={toggleReplyList}>
                        {replyList.active ? (
                            <>
                            <i className="fa fa-caret-up" aria-hidden="true" />
                            <span>Hide {replyCount} {replyCount > 1 ? "Replies" : "Reply"} </span>
                            </>
                            ): (
                                <>
                                <i className="fa fa-caret-down" aria-hidden="true" />
                                <span>Show {replyCount} {replyCount > 1 ? "Replies" : "Reply"}</span>
                                </>
                                )}
                    </span>
                </div>
            )}
            {replyList.active && replyList.data && !isReply && (
                <div className="comments" style={{marginLeft: "30px"}}>
                    {renderReviewReply(replyList.data)}
                </div>
            )}
            {review.added_replies?.length > 0 && <div className="comments" style={{marginLeft: "30px"}}>{renderReviewReply(review.added_replies)}</div>}
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
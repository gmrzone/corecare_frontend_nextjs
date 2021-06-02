import Image from 'next/image';
import style from '../../../styles/blog/postDetail.module.scss'
import CommentForm from './CommentForm'
import { BASE_URL } from '../../../data/_variables'
import { useState } from 'react'
import axios from '../../../data/backendApi'
const PostComment = ({ comment,  year, month, day, slug, replyActive, setActiveReplyFor }) => {
    const [commentReply, setCommentReply] = useState({active: false, data: null})
    const reply_length = comment.replies.length
    const activateReply = () => {
        setActiveReplyFor(comment.id)
    }
    const hideReplyForm = () => {
       setActiveReplyFor(null)
    }
    const toggleReplyList = () => {
        comment.reply_added = null
        if (!commentReply.data){
            axios.get(`blog/post/${comment.id}/replies/`)
            .then(response => {
                setCommentReply({active: !commentReply.active, data: response.data})
            })
        }
        else{
            setCommentReply(state => {
                return {...state, active: !commentReply.active}
            })
        }

    }

    const renderReplies = (replies) => {
        console.log("Running")
        const data = replies.map(reply => {
            return (<div className="comments" key={reply.id}>
                <div className={"avatar " + style.avatar}>
                    <Image src={reply.user?.photo ? reply.user.photo.startsWith("h") ? reply.user.photo : BASE_URL + reply.user.photo : "/default-profile.png"} layout="fill" objectFit="cover" alt="employee" />
                </div>
                <div className={"content"}>
                    <span className="author">{reply.user?.username || reply.user?.email || reply.user?.number || reply.name}</span>
                    <div className="metadata">
                        <span className={"date"}>{reply.created}</span>
                    </div>
                    {/* <Rate disabled defaultValue={review.star} /> */}    
                    <div className="text">
                        {reply.comment}
                    </div>
                </div>
            </div>)
        })
        return data
    }

    
    return (
        <div className={"comment " + style.comment}>
            <span className={"avatar " + style.avatar}>
                {/* <img src={BASEURL + review.user.photo} alt="employee"/> */}
                <Image src={comment.user?.photo ? comment.user.photo.startsWith("h") ? comment.user.photo : BASE_URL + comment.user.photo : "/default-profile.png"} layout="fill" objectFit="cover" alt="employee" />
            </span>
            <div className={"content"}>
                <span className="author">{comment.user?.username || comment.user?.email || comment.user?.number || comment.name}</span>
                <div className="metadata">
                    <span className={"date"}>{comment.created}</span>
                </div>
                {/* <Rate disabled defaultValue={review.star} /> */}    
                <div className="text">
                    {comment.comment}
                </div>
                <div className="actions">
                    <span className={"reply " + style.reply_button} onClick={activateReply}>Reply</span>
                    {replyActive && <span className={"hide " + style.hide_button} onClick={hideReplyForm}>Cancel</span>}
                </div> 
                {replyActive && <CommentForm isReply={true} year={year} month={month} day={day} slug={slug} parent_id={comment.id}/>}
                {comment?.reply_added?.id && renderReplies([comment.reply_added])}
                {reply_length > 0  && (
                    <div className={style.replies_text}><span onClick={toggleReplyList}><i className="fa fa-caret-down" aria-hidden="true" /><span>{commentReply.active ? "Hide" : "View"} {reply_length} {reply_length === 1 ? "Reply" : "Replies"}</span></span></div>
                )}
                {commentReply.active && commentReply.data && renderReplies(commentReply.data)}
            </div>
        </div>
    )
}

export default PostComment
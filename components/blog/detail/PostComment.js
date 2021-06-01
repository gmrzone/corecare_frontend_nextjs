import Image from 'next/image';
import style from '../../../styles/blog/postDetail.module.scss'
import CommentForm from './CommentForm'
import { BASE_URL } from '../../../data/_variables'

const PostComment = ({ comment,  year, month, day, slug, replyActive, setActiveReplyFor }) => {
    
    const activateReply = () => {
        setActiveReplyFor(comment.id)
    }
    const hideReply = () => {
       setActiveReplyFor(null)
    }
    return (
        <div className={"comment " + style.comment}>
            {comment?.added && <h3 style={{color: "red"}}>Here is your comment</h3>}
            <span className={"avatar " + style.avatar}>
                {/* <img src={BASEURL + review.user.photo} alt="employee"/> */}
                <Image src={comment.user?.photo ? comment.user.photo.startsWith("h") ? comment.user.photo : BASE_URL + comment.user.photo : "/default-profile.png"} layout="fill" objectFit="cover" alt="employee" />
            </span>
            <div className={"content"}>
                <span className="author" style={{color: comment?.added ? "green" : "inherit"}}>{comment.user?.username || comment.user?.email || comment.user?.number || comment.name}</span>
                <div className="metadata">
                    <span className={"date"}>{comment.created}</span>
                </div>
                {/* <Rate disabled defaultValue={review.star} /> */}    
                <div className="text" style={{color: comment?.added ? "red" : "inherit"}}>
                    {comment.comment}
                </div>
                <div className="actions">
                    <span className={"reply " + style.reply_button} onClick={activateReply}>Reply</span>
                    {replyActive && <span className={"hide " + style.hide_button} onClick={hideReply}>Cancel</span>}
                </div> 
                {replyActive && <CommentForm isReply={true} year={year} month={month} day={day} slug={slug} parent_id={comment.id}/>}
            </div>
        </div>
    )
}

export default PostComment
import Card from '../Card'
import { useContext } from 'react';
import { PostCommentContext } from '../../../context/PostCommentContext';
import style from '../../../styles/blog/postDetail.module.scss';
import PostCommentItem from './PostComment'
import { useState } from 'react'
const PostComments = ({ year, month, day, slug }) => {
    const { postComments } = useContext(PostCommentContext)
    const [activeReplyFor, setActiveReplyFor] = useState(null)
    let commentCount = 0

    const getReplyData = (reply_ids) => {
        const replies = postComments?.filter(x => x in reply_ids)
        return replies
    }
    const renderComments = postComments?.map(x => {
        commentCount += 1
        const replyCount = x.replies.length
        if (replyCount > 0){
            commentCount += replyCount
        }
        return <PostCommentItem comment={x} key={x.id + x.name} year={year} month={month} day={day} slug={slug} replyActive={activeReplyFor === x.id} setActiveReplyFor={setActiveReplyFor} replies={getReplyData(x.replies)}/>
    })
    return (
        <Card>
            <h4 className="title">Total Comments {commentCount}</h4>
            <div className="ui divider"></div>
            <div className={"ui comments large " + style.comments}>
                {renderComments}
            </div>
        </Card>
    )
}

export default PostComments
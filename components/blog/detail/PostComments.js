import Card from '../Card'
import { useContext } from 'react';
import { PostCommentContext } from '../../../context/PostCommentContext';
import style from '../../../styles/blog/postDetail.module.scss';
import PostCommentItem from './PostComment'
const PostComments = () => {
    const { postComments } = useContext(PostCommentContext)
    const commentCount = postComments ? postComments.length : 0

    const renderComments = postComments?.map(x => {
        return <PostCommentItem comment={x} key={x.id + x.name}/>
    })
    return (
        <Card>
            <h4>Total Comments {commentCount}</h4>
            <div className={"ui comments large " + style.comments}>
                {renderComments}
            </div>
        </Card>
    )
}

export default PostComments
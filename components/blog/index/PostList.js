import { useContext } from 'react'
import { PostListPaginationContext } from '../../../context/PostListPaginationContext'
import style from '../../../styles/blog/index.module.scss'
import PostListItem from './PostListItem'
const PostList = () => {
    const { postList, mutatePostList } = useContext(PostListPaginationContext)
    const renderPosts = postList.posts.map(x => {
        return <PostListItem post={x} key={x.id + x.slug}/>
    })
    return (
        <div className={style.post_list_container}>
            <div class="ui link cards">
                {renderPosts}
            </div>
        </div>
    )
}

export default PostList
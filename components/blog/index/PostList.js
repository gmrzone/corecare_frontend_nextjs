import { useContext } from 'react'
import { PostListPaginationContext } from '../../../context/PostListPaginationContext'
import style from '../../../styles/blog/index.module.scss'
import PostListItem from './PostListItem'
const PostList = () => {
    const { nextPage, pages } = useContext(PostListPaginationContext)
    // const renderPosts = postList.posts.map(x => {
    //     return <PostListItem post={x} key={x.id + x.slug}/>
    // })
    return (
        <div className={style.post_list_container}>
            <div className={`ui link cards ${style.cards}`}>
                {/* {renderPosts} */}
                {pages}
            </div>
            <div className={`ui active centered inline medium loader ${style.loader}`}></div>
        </div>
    )
}

export default PostList
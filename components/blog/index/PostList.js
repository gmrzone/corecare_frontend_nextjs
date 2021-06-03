import { useContext } from 'react'
import { PostListPaginationContext } from '../../../context/PostListPaginationContext'
import style from '../../../styles/blog/index.module.scss'
const PostList = () => {
    const { postList, mutatePostList } = useContext(PostListPaginationContext)
    console.log(postList)
    return (
        <div className={style.post_list_container}>

        </div>
    )
}

export default PostList
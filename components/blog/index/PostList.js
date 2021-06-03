import { useContext, useEffect, useRef } from 'react'
import { PostListPaginationContext } from '../../../context/PostListPaginationContext'
import style from '../../../styles/blog/index.module.scss'
import PostListItem from './PostListItem'
const PostList = () => {
    const { nextPage, pages } = useContext(PostListPaginationContext)
    const loaderRef = useRef()

    useEffect(() => {
        const options = {}
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(x => {
                if (x.isIntersecting){
                    nextPage()
                    console.log("get_next_page")
                }
            })
        }, options)
        observer.observe(loaderRef.current)
    }, [])

    return (
        <div className={style.post_list_container}>
            <div className={`ui link cards ${style.cards}`}>
                {/* {renderPosts} */}
                {pages}
            </div>
            <div className={`ui active centered inline medium loader ${style.loader}`} ref={loaderRef}></div>
        </div>
    )
}

export default PostList
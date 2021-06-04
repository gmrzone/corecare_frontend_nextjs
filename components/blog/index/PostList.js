import { useContext, useEffect, useRef } from 'react'
import { PostListPaginationContext } from '../../../context/PostListPaginationContext'
import style from '../../../styles/blog/index.module.scss'
const PostList = () => {
    const { nextPage, pages, lastPage } = useContext(PostListPaginationContext)
    const loaderRef = useRef()

    useEffect(() => {
        const options = {}
        const observer = new IntersectionObserver((entries, observe) => {
            entries.forEach(x => {
                if (x.isIntersecting){
                    if (lastPage){
                       observe.unobserve(x.target)
                
                    }
                    else{
                        nextPage()
                    }

                    console.log("get_next_page")
                }
            })
        }, options)
        observer.observe(loaderRef.current)

    }, [])

    return (
        <div className={style.post_list_container}>
            <h1>Recent Posts</h1>
            <div className={`ui link cards ${style.cards}`}>
                {/* {renderPosts} */}
                {pages}
            </div>
            <div className={`ui active centered inline medium loader ${style.loader}`} ref={loaderRef} style={{display: lastPage ? "none" : "block"}}></div>
        </div>
    )
}

export default PostList
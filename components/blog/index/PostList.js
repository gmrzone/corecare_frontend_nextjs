import { useContext, useEffect, useRef } from 'react'
import { PostListPaginationContext } from '../../../context/PostListPaginationContext'
import style from '../../../styles/blog/index.module.scss'
import { useRouter } from 'next/router'
const PostList = () => {
    const { nextPage, pages, lastPage, changeCategory, postCategory, pageError } = useContext(PostListPaginationContext)
    const loaderRef = useRef()
    const router = useRouter()
    const category = router?.query?.category


    useEffect(() => {
        changeCategory(category)
    }, [category])


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
            <h1>Recent Posts {postCategory ? postCategory === "ac-service-repair" ? "(Ac Services)" : `(${postCategory.substring(0, 1).toUpperCase() + postCategory.substring(1)})` : "(All)"}</h1>
            <div className={`ui link cards ${style.cards}`}>
                {/* {renderPosts} */}
                {pages}
            </div>
            <div className={`ui active centered inline medium loader ${style.loader}`} ref={loaderRef} style={{display: lastPage || pageError ? "none" : "block"}}></div>
        </div>
    )
}

export default PostList
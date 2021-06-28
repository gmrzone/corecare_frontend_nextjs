import { createContext, useState  } from 'react'
import axios from '../data/backendApi'
import useSWR from 'swr'
import PostListItem from '../components/blog/index/PostListItem'

const PostListPaginationContext = createContext()

const Page = ({ fetcher, pageNum, mobileNav, initialData, views, category }) => {
    const init = pageNum === 1 ? { initialData } : {}
    const {data: postList} = useSWR(mobileNav ? `blog/posts/?page=${pageNum}&size=6${category ? "&category=" + category : ""}` : `blog/posts/?page=${pageNum}${category ? "&category=" + category : ""}`, fetcher, init)
  
    return postList?.posts.map(x => <PostListItem post={x} key={x.id} view={views?.[x.id] || 0}/>) || null
}

const PostListPaginationProvider = ({ children, initialData, mobileNav }) => {
    const [pageError, setPageError] = useState()
    const fetcher = (...args) => axios.get(...args).then(response => response.data).catch(e => {
        if (e.response.status === 404){
            setPageError(true)
        }
        console.clear()
    })
    const {data: postViews} = useSWR('blog/posts/views/', fetcher)
    const [pageCount, setPageCount] = useState(1)
    const [postCategory, setPostCategory] = useState(null)
    
    const pages = []
    for (let i = 1; i <= pageCount; i++){
        pages.push(<Page key={i} fetcher={fetcher} pageNum={i} mobileNav={mobileNav} initialData={initialData} views={postViews} category={postCategory}/>)
    }
    const lastPage = pageCount === initialData?.page_count
    console.log(lastPage)
    const nextPage = () => {
        setPageCount(s => s+1)  
    }
    const changeCategory = (category) => {
        setPageCount(1)
        setPostCategory(category)
    }
    return (
        <PostListPaginationContext.Provider  value={{ nextPage, pages, lastPage, changeCategory, postCategory, pageError }}>
            {children}
        </PostListPaginationContext.Provider>
    )
}

export { PostListPaginationContext, PostListPaginationProvider }
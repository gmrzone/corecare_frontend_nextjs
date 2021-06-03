import { createContext, useState, useSTate } from 'react'
import axios from '../data/backendApi'
import useSWR from 'swr'
import PostListItem from '../components/blog/index/PostListItem'

const PostListPaginationContext = createContext()

const Page = ({ pageNum, mobileNav, initialData }) => {

    const fetcher = (...args) => axios.get(...args).then(response => response.data)
    const {data: postList} = useSWR(mobileNav ? `blog/posts/?page=${pageNum}&size=6` : `blog/posts/?page=${pageNum}`, fetcher, {initialData: initialData})
    console.log(postList)
    return postList.posts.map(x => <PostListItem post={x} key={x.id}/>)
}

const PostListPaginationProvider = ({ children, initialData, mobileNav }) => {
    const [pageCount, setPageCount] = useState(1)
    const pages = []
    for (let i=1; i <= pageCount; i++){
        pages.push(<Page key={i} pageNum={i} mobileNav={mobileNav} initialData={initialData}/>)
    }
    const nextPage = () => {
        setPageCount(s => ++s)
    }
    return (
        <PostListPaginationContext.Provider  value={{ nextPage, pages }}>
            {children}
        </PostListPaginationContext.Provider>
    )
}

export { PostListPaginationContext, PostListPaginationProvider }
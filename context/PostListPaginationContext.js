import { createContext } from 'react'
import axios from '../data/backendApi'
import useSWR from 'swr'


const PostListPaginationContext = createContext()


const PostListPaginationProvider = ({ children, initialData, mobileNav }) => {
    const fetcher = (...args) => axios.get(...args).then(response => response.data)
    const {data: postList, mutate: mutatePostList} = useSWR(mobileNav ? "blog/posts/?page=1&size=6" : 'blog/posts/?page=1', fetcher, {initialData: initialData})
    return (
        <PostListPaginationContext.Provider  value={{ postList, mutatePostList }}>
            {children}
        </PostListPaginationContext.Provider>
    )
}

export { PostListPaginationContext, PostListPaginationProvider }
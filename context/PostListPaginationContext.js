import { createContext } from 'react'
import axios from '../data/backendApi'
import useSWR from 'swr'


const PostListPaginationContext = createContext()


const PostListPaginationProvider = ({ children, initialData }) => {
    const {} = useSWR('')
    return (
        <PostListPaginationContext.Provider>
            {children}
        </PostListPaginationContext.Provider>
    )
}

export { PostListPaginationContext, PostListPaginationProvider }
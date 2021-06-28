import { createContext } from 'react';
import useSWR from 'swr'
import axios from '../data/backendApi'

const PostCommentContext = createContext()


const PostCommentProvider = ({ children, year, month, day, slug }) => {
    const fetcher = (...args) => axios.get(...args).then(response => response.data)
    const {data: postComments, mutate: mutatePostComments} = useSWR(`blog/post/${year}/${month}/${day}/${slug}/comments/`, fetcher)
    return (
        <PostCommentContext.Provider value={{ postComments, mutatePostComments }}>
            {children}
        </PostCommentContext.Provider>
    )
}

export { PostCommentContext, PostCommentProvider }
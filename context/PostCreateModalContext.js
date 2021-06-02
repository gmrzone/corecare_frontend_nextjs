import { createContext, useState } from 'react'


const PostCreateModalContext = createContext()


const PostCreateModalProvider = ({ children }) => {

    const [createModelActive, setCreateModalActive] = useState(false);
    const [textEditorLoading, setTextEditorLoading] = useState(true)


    return (
        <PostCreateModalContext.Provider value={{ createModelActive, setCreateModalActive, textEditorLoading, setTextEditorLoading }}>
            {children}
        </PostCreateModalContext.Provider>
    )
}

export { PostCreateModalContext, PostCreateModalProvider }
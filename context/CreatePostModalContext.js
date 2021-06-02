import { createContext, useState } from 'react';


const CreatePostModalContext = createContext()


const CreatePostModalProvider = ({ children }) => {
    const [createModelActive, setCreateModalActive] = useState(false);
    return (
        <CreatePostModalContext.Provider value={{ createModelActive, setCreateModalActive }}>
            { children }
        </CreatePostModalContext.Provider>
    )
}

export { CreatePostModalContext, CreatePostModalProvider }
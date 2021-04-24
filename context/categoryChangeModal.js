import { createContext } from 'react';


const CategoryModalContext = createContext()


const CategoryModalProvider = ({ children, openCategoryModal }) => {
    return (
        <CategoryModalContext.Provider value={openCategoryModal}>
            {children}
        </CategoryModalContext.Provider>
    )
}

export { CategoryModalContext, CategoryModalProvider }
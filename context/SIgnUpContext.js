import { createContext, useState } from 'react'

const SignUpContext = createContext()


const SignUpContextProvider = ({ children }) => {
    const [signUpActive, setSignUpActive] = useState(false)
    return (
        <SignUpContext.Provider value={{ signUpActive, setSignUpActive }}>
            {children}
        </SignUpContext.Provider>
    )
}

export { SignUpContext, SignUpContextProvider }
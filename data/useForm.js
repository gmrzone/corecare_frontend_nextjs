import { useState } from 'react'
const useForm = (initialValue) => {
    const [input, setInput] = useState(initialState)
    handleChange = (e) => {
        setInput(state => {
            return {
                ...state, [e.target.name]: e.target.value
            }
        })
        return {input, handleChange}
    }
}

export default useForm
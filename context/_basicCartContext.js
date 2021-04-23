import React, { useContext } from 'react';
import useSWR from 'swr'
import BackendApi from '../data/backendApi'

const BasicCartContext = useContext()

const BasicCartProvider = ({ children }) => {
    // const fetcher = (...args) => BackendApi.get(...args).then(response => response.data)
    // const {data: baseCart, mutate: mutateBaseCart, error: baseCartError } = useSWR('get_current_user/', fetcher)

    return (
        {children}
    )
}

export { BasicCartContext, BasicCartProvider }


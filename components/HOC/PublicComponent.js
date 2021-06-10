import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { frontend_base } from '../../data/_variables'
import FullScreenLoader from '../common/FullScreenLoader'
const PublicComponent = (PublicComponent) => {
    const redirectToHome = () => {
        if (typeof window !== 'undefined'){
            window.location.href = frontend_base
        }
    }
    return (props) => {
        const {loading: authLoading, loginStatus} = useContext(AuthContext)
        return (
            <>
                {authLoading ? (<FullScreenLoader />) : loginStatus ? redirectToHome() : (<PublicComponent {...props}/>)}
            </>
        )
    }
}

export default PublicComponent
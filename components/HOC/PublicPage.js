import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { frontend_base } from '../../data/_variables'
import FullScreenLoader from '../common/FullScreenLoader'
const PublicPage = (PublicComponent) => {
    const redirectToHome = () => {
        if (typeof window !== 'undefined'){
            console.log("Running Afzal")
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

export default PublicPage
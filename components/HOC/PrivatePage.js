import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { frontend_base } from '../../data/_variables'
import FullScreenLoader from '../common/FullScreenLoader'
const PrivatePage = (PrivateComponent) => {
    const redirectToLogin = () => {
        if (typeof window !== 'undefined'){
            window.location.href = frontend_base + 'login'
        }
    }
    return (props) => {
        const {loading: authLoading, loginStatus} = useContext(AuthContext)
        return (
            <>
                {authLoading ? (<FullScreenLoader />) : loginStatus ? (<PrivateComponent {...props}/>) : redirectToLogin()}
            </>
        )
    }
}

export default PrivatePage
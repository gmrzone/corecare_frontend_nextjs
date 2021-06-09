import Model from '../common/Modal'
import SignUpPageThree from '../signup/SignUpThree';
import { useContext } from 'react';
import { CsrfContext } from '../../context/CsrfTokenContext'
const UpdateProfileModel = ({ active, setActive, payButton}) => {
    const {csrfToken, mutateCsrf} = useContext(CsrfContext)
    const signup = {number: null, password: null}
    const closeSignup = () => {
        setActive(false)
    }   
    return (
        <Model header="Update Profile" active={active} closeModel={closeSignup}>
            <SignUpPageThree signUpstate={signup} closeModel={closeSignup} successPath='/cart' payButton={payButton} csrfToken={csrfToken} mutateCsrf={mutateCsrf}/>
        </Model>
    )
}

export default UpdateProfileModel

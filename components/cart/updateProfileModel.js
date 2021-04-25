import Model from '../common/Modal'
import SignUpPageThree from '../signup/SignUpThree';
const UpdateProfileModel = ({ active, setActive, payButton}) => {
    const signup = {number: null, password: null}
    const closeSignup = () => {
        setActive(false)
    }   
    return (
        <Model header="Update Profile" active={active} closeModel={closeSignup}>
            <SignUpPageThree signUpstate={signup} closeModel={closeSignup} successPath='/cart' payButton={payButton} />
        </Model>
    )
}

export default UpdateProfileModel
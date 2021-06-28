import { useState, useContext } from 'react'
import SignUpHeader from './SignUpHeader'
import SignUpOne from './SignUpOne'
import SignUpTwo from './SignUpTwo'
import SignUpThree from './SignUpThree'
import ProfileAvatarUpdate from './ProfileAvatarUpdate';
import { CsrfContext } from '../../context/CsrfTokenContext'

const SignupModelContentWrapper = ({ closeSignup, setModelHeaderText }) => {
    const { csrfToken, mutateCsrf } = useContext(CsrfContext)
    const [signup, setSignup] = useState({otpSend: false, otpVerified: false, profilePicUpdated: false, number: null, otp: null, password: ""})
    const [header, setHeader] = useState({title: "", subtitle: ""})
    const closeSignUpModel = () => {
        setSignup({otpSend: false, otpVerified: false, profilePicUpdated: false, number: null, otp: null, password: ""})
        closeSignup()
    }
    return (
        <>  
            {!signup.otpSend || !signup.otpVerified ? <SignUpHeader title={header.title} subtitle={header.subtitle} /> : ""}
            {!signup.otpSend && !signup.otpVerified ? <SignUpOne closeSignup={closeSignup} signUpSettings={setSignup} setSignUpHeader={setHeader} csrfToken={csrfToken} mutateCsrf={mutateCsrf}/> : ""}
            {signup.otpSend && !signup.otpVerified ? <SignUpTwo signUpSettings={setSignup} setSignUpHeader={setHeader} signUpData={signup} csrfToken={csrfToken} mutateCsrf={mutateCsrf}/> : ""}
            {signup.otpSend && signup.otpVerified && !signup.profilePicUpdated ?<ProfileAvatarUpdate signUpstate={signup} setSignUpstate={setSignup} csrfToken={csrfToken} mutateCsrf={mutateCsrf}/> : ""}
            {signup.otpSend && signup.otpVerified && signup.profilePicUpdated ? <SignUpThree signUpstate={signup} closeModel={closeSignUpModel} successPath="/login/signup" additionalTask={null} setModelHeader={setModelHeaderText} csrfToken={csrfToken} mutateCsrf={mutateCsrf}/>  : ""}
        </>
    )
}

export default SignupModelContentWrapper
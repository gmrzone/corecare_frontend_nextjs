import { useState } from 'react'
import SignUpHeader from './SignUpHeader'
import SignUpOne from './SignUpOne'
import SignUpTwo from './SignUpTwo'
import SignUpThree from './SignUpThree'
import ProfileAvatarUpdate from './ProfileAvatarUpdate';

const SignupModelContentWrapper = ({ closeSignup, setModelHeaderText }) => {
    const [signup, setSignup] = useState({otpSend: false, otpVerified: false, profilePicUpdated: false, number: null, otp: null, password: ""})
    const [header, setHeader] = useState({title: "", subtitle: ""})
    const closeSignUpModel = () => {
        setSignup({otpSend: false, otpVerified: false, profilePicUpdated: false, number: null, otp: null, password: ""})
        closeSignup()
    }
    return (
        <>  
            {!signup.otpSend || !signup.otpVerified ? <SignUpHeader title={header.title} subtitle={header.subtitle} /> : ""}
            {!signup.otpSend && !signup.otpVerified ? <SignUpOne closeSignup={closeSignup} signUpSettings={setSignup} setSignUpHeader={setHeader} /> : ""}
            {signup.otpSend && !signup.otpVerified ? <SignUpTwo signUpSettings={setSignup} setSignUpHeader={setHeader} signUpData={signup}/> : ""}
            {signup.otpSend && signup.otpVerified && !signup.profilePicUpdated ?<ProfileAvatarUpdate signUpstate={signup} setSignUpstate={setSignup}/> : ""}
            {signup.otpSend && signup.otpVerified && signup.profilePicUpdated ? <SignUpThree signUpstate={signup} closeModel={closeSignUpModel} successPath="/login/signup" additionalTask={null} setModelHeader={setModelHeaderText}/>  : ""}
        </>
    )
}

export default SignupModelContentWrapper
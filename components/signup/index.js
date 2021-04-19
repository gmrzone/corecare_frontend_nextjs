import { useState } from 'react'
import Model from '../common/Modal';
// import { connect } from 'react-redux';
// import { closeSignup } from '../../actions'
import SignupModelContentWrapper from './SignUpModelContentWrapper'
const Signup = (props) => {
    // const [modelheaderText, setModelHeaderText] = useState('Create Account')

    return(
        <Model header="Create Account" active={props.modelActive} closeModel={() => props.closeSignup()}>
            <SignupModelContentWrapper closeSignup={() => props.closeSignup()}/>
        </Model>
    )
}


export default Signup
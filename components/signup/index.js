import { useState } from 'react'
import Model from '../common/Modal';
// import { connect } from 'react-redux';
// import { closeSignup } from '../../actions'
import SignupModelContentWrapper from './SignUpModelContentWrapper'
const Signup = (props) => {
    const [modelheaderText, setModelHeaderText] = useState('Create Account')
    const closeSignup = () => {
        props.closeSignup()
    }
    
    return(
        <Model header={modelheaderText} active={props.modelActive} closeModel={closeSignup}>
            <SignupModelContentWrapper closeSignup={closeSignup} setModelHeaderText={setModelHeaderText}/>
        </Model>
    )
}


export default Signup
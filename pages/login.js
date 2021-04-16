// import { Field, Form } from 'react-final-form';
// import '../../style/login.css';
import style from '../styles/login/Login.module.scss'
import NumberField from '../components/common/NumberField'
import { useRouter } from 'next/router'
import Layout from '../components/common/Layout'
import MetaComponent from '../components/common/MetaComponent'
// import { connect } from 'react-redux';
// import { login } from '../../actions'
// import { openSignup } from '../../actions'
import Link from 'next/link'
import { useRef, useState } from 'react';

const Login = (props) => {
    const param = useRouter().query.pathParam
    const NumberErrorRef = useRef(false);
    const NumberErrorMssg = useRef(null)
    const [formError, setFormError] = useState({error: false, message: null})
    const validateForm = () => {
        let error = {}
        return error
    }
    const submitForm = (formValues) => {
        props.login(formValues, setFormError)
    }
    const validateNumber = (value) => {
        if (value){
            if (value[0].match(/[0-6a-zA-Z]/)){
                NumberErrorRef.current = true
                NumberErrorMssg.current = `Number cannot start with ${value[0]}`
            }
        }
        else{
            NumberErrorRef.current = false
            return undefined
        }
    }
    const PasswordValidate = (value) => {
        
    }
    return(
        <>
        <MetaComponent title="Login" description="Login page" name="Login Page" url="http://0.0.0.0:3000/login"/>
        <Layout mobileNav={props.mobileNav}>
        <div className={style.form_container}>
            <div className={style.innerContainer}>
            {param === "signup" ? <div className="ui green message small">Account Created Sucessfully. You can Login Now</div> : ""}
                <h1>Login To Corecare</h1>
                        <form className="login-form ui large form">
                            <div>
                                <NumberField input={null} label="Mobile Number" meta={null}/>
                                <div className="field">
                                    <label>Password</label>
                                    <input placeholder="password" type="password" className={style.password_field}/>
                                </div>
                                <Link href="/login/forgot_password">
                                    <a className="forgot-password">Forgot passowrd</a>
                                </Link>
                                <div style={{textAlign: 'right'}}>
                                    <button className="ui secondary button" onClick={() => props.openSignup()} type="button">
                                        Signup
                                    </button>
                                    <button className="ui positive right labeled icon button" type="submit">
                                        Login
                                        <i className="checkmark icon"></i>
                                    </button>
                            </div>
                            </div>
                            <div className={`ui message red ${NumberErrorRef.current || formError.error ? "visible" : "hidden"}`}>
                                <p>{NumberErrorMssg.current || formError.message}</p>
                            </div>
                        </form>
                </div>
        </div>
        </Layout>
        </>
    )
}

// export default connect(null, { login, openSignup })(Login)
export default Login
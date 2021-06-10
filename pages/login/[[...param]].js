import style from '../../styles/login/Login.module.scss'
import NumberField from '../../components/common/NumberField'
import { useRouter } from 'next/router'
import Layout from '../../components/common/Layout'
import MetaComponent from '../../components/common/MetaComponent'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { frontend_base } from '../../data/_variables'
import axios from '../../data/backendApi'
import { useState, useEffect, useRef } from 'react';
import LoginFooter from '../../components/login/LoginFooter'
import { useContext } from 'react'
import { CsrfContext } from '../../context/CsrfTokenContext'
import { SignUpContext } from '../../context/SIgnUpContext'
import { AuthContext } from '../../context/AuthContext'


const Login = (props) => {
    const { csrfToken, mutateCsrf } = useContext(CsrfContext)
    const { setShouldFetch: setShouldFetchUser, loginStatus } = useContext(AuthContext)
    const router = useRouter()
    const LoginForm = useRef();
    const param = router.query.param
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formErr, setFormErr] = useState(null)
    const { mobileNav } = props;
    const [loading, setLoading] = useState(false)
    const { setSignUpActive } = useContext(SignUpContext)
    function setCookie(name,value,seconds) {
    var expires = "";
    if (seconds) {
        var date = new Date();
        date.setTime(date.getTime() + (seconds * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    const submitForm = (formValues) => {
        setLoading(true)
        axios.post('account/login/v1/', formValues, {headers: {'X-CSRFToken': csrfToken}})
        .then(response => {
            if (response.statusText === "OK"){
                // localStorage.setItem("get_user", true)
                setShouldFetchUser(true)
                setLoading(false)
                router.push('/')
                mutateCsrf()
            }
        })
        .catch(error => {
            console.clear()
            setFormErr("Invalid Username or Password")
        })
    }
    useEffect(() => {
        if (mobileNav){
            LoginForm.current.style.height = 'auto';
            
        }
        else {
            LoginForm.current.style.height = (window.innerHeight - 75 - 70) + "px";
        }
        
    }, [mobileNav])

    return(
        <>
        <MetaComponent title="Login" description="Login page" name="Login Page" url={`${frontend_base}login`}/>
        <Layout mobileNav={props.mobileNav} FooterSeft={LoginFooter}>
        <div className={style.form_container} ref={LoginForm}>
            <div className={style.left_container}>
                    <div className={style.half_container}>
                        <h1 className={style.login_title}>Login To get High-Quality workmanship at great Prices</h1>
                        <ul className={style.login_list}>
                            <li className="login-list__item">For speedy repairs</li>
                            <li className="login-list__item">Prompt service you can depend on</li>
                            <li className="login-list__item">Save money on your repair projects.</li>
                            <li className="login-list__item">Deliver trusted repair services.</li>
                        </ul>
                    </div>
            </div>
            <div className={style.right_container}>
            {param?.[0] === "signup" ? <div className="ui green message small fluid">Account Created Sucessfully. You can Login Now</div> : ""}
                {/* <h1>Login To Corecare</h1> */}
                        <form className={style.login_form + " ui huge form"} onSubmit={handleSubmit(submitForm)}>
                                <NumberField input={null} label="Mobile Number" meta={null} register={register} errors={errors}/>
                                <div className={`field ${errors.password && "error"}`}>
                                    <label>Password</label>
                                    <input placeholder="password" type="password" className={style.password_field} {...register("password", {required: {value: true, message: "Cannot login with a blank password"}, minLength: {value: 8, message: "Password should be greater then 8 characters"}})}/>
                                </div>
                                <Link href="/login/forgot_password">
                                    <a className="forgot-password">Forgot password</a>
                                </Link>
                                <div style={{textAlign: 'right'}}>
                                    <button className="ui secondary button" onClick={() => setSignUpActive(true)} type="button">
                                        Signup
                                    </button>
                                    <button className={`ui positive right labeled icon button ${loading && "loading"}`} type="submit">
                                        Login
                                        <i className="checkmark icon"></i>
                                    </button>
                            </div>
                            <div className={`ui message red ${errors.number || errors.password || formErr ? "visible" : "hidden"}`}>
                                <p>{errors?.number?.message || errors?.password?.message || formErr}</p>
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
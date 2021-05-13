import style from '../../styles/login/Login.module.scss'
import NumberField from '../../components/common/NumberField'
import { useRouter } from 'next/router'
import Layout from '../../components/common/Layout'
import MetaComponent from '../../components/common/MetaComponent'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { frontend_base } from '../../data/_variables'
import axios from 'axios'
import localStorageObj from '../../data/localStorageObj'
import { useState, useEffect, useRef } from 'react';
import LoginFooter from '../../components/login/LoginFooter'

const Login = (props) => {
    const router = useRouter()
    const LoginForm = useRef();
    console.log(props.mobileNav)
    const param = router.query.param
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formErr, setFormErr] = useState(null)
    const { mobileNav } = props;
    const submitForm = (formValues) => {
        axios.post('api/token/', formValues)
        .then(response => {
            console.log(response)
            if (response.statusText === "OK"){
                console.log("Afzal")
                localStorageObj._setToken(response.data.access, response.data.refresh)
                router.push('/')
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
            {param?.[0] === "signup" ? <div className="ui green message small">Account Created Sucessfully. You can Login Now</div> : ""}
                {/* <h1>Login To Corecare</h1> */}
                        <form className={style.login_form + " ui huge form"} onSubmit={handleSubmit(submitForm)}>
                                <NumberField input={null} label="Mobile Number" meta={null} register={register} errors={errors}/>
                                <div className={`field ${errors.password && "error"}`}>
                                    <label>Password</label>
                                    <input placeholder="password" type="password" className={style.password_field} {...register("password", {required: {value: true, message: "Cannot login with a blank password"}, minLength: {value: 8, message: "Password should be greater then 8 characters"}})}/>
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
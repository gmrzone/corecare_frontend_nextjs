import { useEffect, useState } from 'react';
import Link from 'next/link'
import NumberField from '../common/NumberField';
import { useForm } from 'react-hook-form'
import BackendApi from '../../data/backendApi'
const SignUpPageOne = ({ setSignUpHeader, signUpSettings, closeSignup, csrfToken, mutateCsrf }) => {
    const [formError, setFormError] = useState({status: null, message: null})
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setSignUpHeader({'title': 'Verify number', subtitle: 'Please enter your number to receive a 6 digit verification Code.'})

        return () => {
            setSignUpHeader({'title': '', subtitle: ''})
        }
    }, [setSignUpHeader])

    const submitForm = (formValues) => {
        setLoading(true)
        BackendApi.post('account/create_user_account/', formValues, {headers: {'X-CSRFToken': csrfToken}})
        .then(response => {
            signUpSettings(state => {
                return {...state, otpSend: true, number: formValues.number, otp: response.data.otp}
            })
            setLoading(false)
            mutateCsrf()
        })
        .catch(err => {
            if (err.response.data.status === "error"){
                setFormError({status: "error", message: err.response.data.msg})
            }
            else {
                console.log(err)
            }
            setLoading(false)
            mutateCsrf()
        })

    }
    return(
        <>
        <form onSubmit={handleSubmit(submitForm)} className="login-form ui large form">
            <NumberField register={register} errors={errors}/>
            <div style={{textAlign: 'right'}}>
                <Link href="/login">
                    <a className="ui secondary button" onClick={() => closeSignup()}>Login</a>
                </Link>
                <button className={`ui positive right labeled icon button ${loading && "loading"}`} type="submit">
                    Get Otp
                    <i className="checkmark icon"></i>
                </button>
            </div>
            <div className={`ui message red ${errors.number || formError.status === 'error' ? "visible" : "hidden"}`}>
                <p>{errors?.number?.message || formError.message}</p>
            </div>
        </form>
        </>
    )
}

// export default connect(null, { verifyNumber })(SignUpPageOne);
export default SignUpPageOne
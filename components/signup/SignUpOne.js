import { useRef, useEffect, useState } from 'react';
import Link from 'next/link'
import NumberField from '../common/NumberField';
import { useForm } from 'react-hook-form'
import { SignUpPageTwo } from './SignUpTwo';
// import { Field, Form } from 'react-final-form'
// import { verifyNumber } from '../../actions'
// import { connect } from 'react-redux'

const SignUpPageOne = (props) => {
    const [formError, setFormError] = useState({status: null, message: null})
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { setSignUpHeader } = props
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setSignUpHeader({'title': 'Verify number', subtitle: 'Please enter your number to receive a 6 digit verification Code.'})

        return () => {
            setSignUpHeader({'title': '', subtitle: ''})
        }
    }, [setSignUpHeader])

    const submitForm = (formValues) => {
        // setLoading(true)
        console.log(formValues)
    }
    return(
        <>
        <form onSubmit={handleSubmit(submitForm)} className="login-form ui large form">
            <NumberField register={register}/>
            <div style={{textAlign: 'right'}}>
                <Link href="/login">
                    <a className="ui secondary button" onClick={() => props.closeSignup()}>Login</a>
                </Link>
                <button className={`ui positive right labeled icon button ${loading && "loading"}`} type="submit">
                    Get Otp
                    <i className="checkmark icon"></i>
                </button>
            </div>
            <div className={`ui message red ${errors.number || formError.status === 'error' ? "visible" : "hidden"}`}>
                <p>{errors?.numbers?.message || formError.message}</p>
            </div>
        </form>
        </>
    )
}

// export default connect(null, { verifyNumber })(SignUpPageOne);
export default SignUpPageOne
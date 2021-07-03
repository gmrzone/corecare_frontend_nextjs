import style from '../../styles/contact/Contact.module.scss'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import backendAPI from '../../data/backendApi';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'
import { CsrfContext } from '../../context/CsrfTokenContext'
const ContactForm = ({ authentication, contactUs }) => {
    const { csrfToken, mutateCsrf } = useContext(CsrfContext)
    const { userData, loginStatus } = useContext(AuthContext)
    console.log(loginStatus, userData)
    const [loading, setLoading] = useState(false)
    const [formMessage, setFormMessage] = useState({status: '', message: ""})
    const { setValue ,register, handleSubmit ,formState: { errors }} = useForm();
    useEffect(() => {
        setValue('first_name', loginStatus ? userData.first_name : "", { shouldValidate: false })
        setValue('last_name', loginStatus ? userData.last_name : "", { shouldValidate: false })
        setValue('email', loginStatus ? userData.email : "", { shouldValidate: false})
    }, [loginStatus, setValue, userData])
    const onSubmit = (formValues) => {
        setLoading(true)
        console.log(formValues)
        backendAPI.post('contact/send/', formValues, {headers: {'X-CSRFToken': csrfToken}})
        .then(response => {
            setLoading(false)
            setFormMessage({status: response.data.status, message: response.data.message})
            mutateCsrf()
        })
        .catch(e => {
            setLoading(false)
            setFormMessage({status: response.data.status, message: response.data.message})
        })
    }
    const getSubmitError = () => {
        if (errors.first_name || errors.last_name || errors.email || errors.message){
            return true
        }
        return false
    }
    // const initialValues = authentication.loginStatus ? {first_name: authentication.first_name, last_name: authentication.last_name, email: authentication.email} : {}
    return (
            <form className={"ui form big " + style.contact_form_main} onSubmit={handleSubmit(onSubmit)}>
                <div className={`ui tiny message ${getSubmitError() || formMessage.status === 'error' ? "red" : formMessage.status === "ok" ? "green" : "hidden"}`}>
                    {errors?.first_name?.message || errors?.last_name?.message || errors?.email?.message || errors?.message?.message || formMessage.message}
                </div>
                <div className="two fields">
                    <div className={`field ${errors.first_name && "error"}`}>
                        <label>First Name</label>
                            <input name="first_name"
                            component="input"
                            type="text"
                            placeholder="First Name" {...register('first_name', {minLength: {value: 2, message: "First name cannot be less then 2 character"}, required: {value: true, message: "Please enter your first name"}})}/>
                    </div>
                    <div className={`field ${errors.last_name && "error"}`}>
                        <label>Last Name</label>
                            <input name="last_name"
                            component="input"
                            type="text"
                            placeholder="Last Name" {...register('last_name', {minLength: {value: 2, message: "Last name cannot be less then 2 character"}, required: {value: true, message: "Please Enter your last Name"}})}/>
                    </div>
                </div>
                <div className={`field ${errors.email && "error"}`}>
                    <label>Email</label>
                    <input name="email"
                            component="input"
                            type="email"
                            placeholder="Email" {...register('email', {pattern: {value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/, message: "Invalid email format please enter a valid email."}, required: {value: true, message: "Please Enter a email address"}})}/>
                </div>
                <div className={`field ${errors.message && "error"}`}>
                    <label>Message</label>
                    <textarea placeholder="Enter Your Message" maxLength="500" minLength="10" {...register('message', {minLength: {value: 10, message: "Message Should contain atleast 10 characters"}, required: {value: true, message: "You need to enter a message"}})}/>
                </div>
                <div className="action" style={{textAlign: 'right'}}><button className={`ui button ${loading ? "loading" : ""}`} tabIndex="0" type="submit">Send</button></div>
            </form>
    )
}

export default ContactForm
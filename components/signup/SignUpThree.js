// import { signUpUpdateProfile, login } from '../../actions'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import BackendApi from '../../data/backendApi'
const SignUpPageThree = ({ signUpstate, signUpUpdateProfile, closeModel, successPath, payButton, csrfToken, mutateCsrf }) => {
    const history = useRouter()
    const [loading, setLoading] = useState(false)
    const [formSection, nextFormSection] = useState(0)
    const [formError, setFormError] = useState({status: null, msg: 'null'})
    const {register, handleSubmit, watch, formState: { errors, isValid }} = useForm()
    const onSubmit = (formValues) => {
        // setLoading(true)
        formValues.number = signUpstate.number
        formValues.password = signUpstate.password
        // signUpUpdateProfile(formValues, closeModel, setLoading, setFormError, history, successPath, payButton)
        setLoading(true)
        BackendApi.post('account/create_user_account/additional/', formValues, {headers: {'X-CSRFToken': csrfToken}})
        .then(response => {
            if (response.data.status === 'ok'){
                setLoading(false)
                closeModel()
                if (successPath){
                    // history.push(successPath)
                    setTimeout(() => history.push(successPath), 200)
                }
                if (payButton){
                    payButton.current.click()
                }

            }
            else{
                setLoading(false)
                setFormError({status: 'error', msg: response.data.msg})
            }
            mutateCsrf()
        })
        
    }
    const isError = () => {
        if (errors?.first_name || errors?.last_name || errors?.email || errors?.address_1 || errors?.address_2 || errors?.state || errors?.pincode || errors?.city){
            return true
        }
        return false
    }
    const disableFirstSection = () => {
        const state = watch()
        if (state.first_name && state.last_name && state.email){
            return false
        }
        return true
    }
    const renderButton = () => {
        if (formSection === 0){
            return (
                <div className="buttons" style={{textAlign: 'right', marginTop: '15px'}}>
                    <button className={`ui secondary button ${disableFirstSection() && "disabled"}`} onClick={() => nextFormSection(s => s + 1)} type="button">
                        Next
                    </button>
                </div>
            )
        }
        else if (formSection === 1) {
            return (
                <div className="buttons" style={{textAlign: 'right'}}>
                    <button className="ui secondary button" onClick={() => nextFormSection(s => s - 1)} type="button">
                        Previous
                    </button>
                    <button type="submit" className={`ui positive right labeled icon button ${loading && "loading"}`}>
                        Update
                    <i className="address card icon"></i>
                    </button>
                </div>
            )
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="ui form large">
            {formSection >= 0 && (<section className="wizard_one">
                <div className="two fields">
                    <div className={`field ${errors.first_name ? "error" : ""}`}>
                        <label>First Name</label>
                        <input type="text" placeholder="First name" {...register('first_name', {required: {value: true, message: "Please enter your first name"}})}/>
                    </div>
                    <div className={`field ${errors.last_name ? "error" : ""}`}>
                        <label>Last Name</label>
                        <input type="text" placeholder="Last name" {...register('last_name', {required: {value: true, message: "Please enter your last name"}})}/>
                    </div>
                </div>
                <div className={`field ${errors.email ? "error" : ""}`}>
                    <label>Email</label>
                    <input type="email" placeholder="Email" {...register('email', {required: {value: true, message: "Please enter a email address"}, pattern: {value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/, message: "Please Enter a valid Email Address"}})}/>
                </div>
            </section>)}
            {formSection >= 1 && (<section className="wizard_two">
                <div className={`field ${errors.address_1 ? "error" : ""}`}>
                    <label>Address 1</label>
                    <input type="text" placeholder="Address One" {...register('address_1', {required: {value: true, message: "Please enter your Address"}})}/>
                </div>
                <div className={`field ${errors.address_2 ? "error" : ""}`}>
                    <label>Address 2</label>
                    <input type="text" placeholder="Address Two" {...register('address_2', {required: {value: true, message: "Please enter your Address"}})}/>
                </div>
                <div className={`field ${errors.state ? "error" : ""}`}>
                    <label>State</label>
                    <input type="text" placeholder="State" {...register('state', {required: {value: true, message: "Please enter your State"}})}/>
                </div>
                <div className="two fields">
                    <div className={`field ${errors.city ? "error" : ""}`}>
                        <label>City</label>
                        <input type="text" placeholder="City" {...register('city', {required: {value: true, message: "Please enter your City"}})}/>
                    </div>
                    <div className={`field ${errors.pincode ? "error" : ""}`}>
                        <label>Pincode</label>
                        <input type="text" placeholder="Pincode" {...register('pincode', {required: {value: true, message: "Please enter your pincode"}, maxLength: {value: 6, message: "Pincode cannot be greater then 6 digits"}, pattern: {value: /\d{6}/, message: "Please enter a valid Pincode"}})}/>
                    </div>
            </div>
            </section>)}
            {renderButton()}
            <div className={`ui tiny message red ${formError.status === 'error' || isError() ? "visible" : "hidden"}`}>
                    {errors?.first_name?.message || errors?.last_name?.message || errors?.email?.message || errors?.address_1?.message || errors?.address_2?.message || errors?.state?.message || errors?.pincode?.message || errors?.city?.message || formError.msg}
            </div>
            <style jsx>{`
                .wizard_one {
                    display: ${formSection === 0 ? "block" : "none"};
                }
                .wizard_two {
                    display: ${formSection === 1 ? "block" : "none"}
                }
            `}</style>
        </form>
    )
}
export default SignUpPageThree
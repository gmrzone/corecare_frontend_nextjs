// import { signUpUpdateProfile, login } from '../../actions'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
const SignUpPageThree = ({ signUpstate, signUpUpdateProfile, closeModel, successPath, payButton }) => {
    const history = useRouter()
    const [loading, setLoading] = useState(false)
    const [formError, setFormError] = useState({status: null, msg: 'null'})
    const {register, handleSubmit, formState: { errors }} = useForm()
    const onSubmit = (formValues) => {
        // setLoading(true)
        formValues.number = signUpstate.number
        formValues.password = signUpstate.password
        // signUpUpdateProfile(formValues, closeModel, setLoading, setFormError, history, successPath, payButton)
        console.log(formValues)
        
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="ui form large">
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
                <input type="email" placeholder="Email"/>
            </div>
            <div className={`field ${errors.address_1 ? "error" : ""}`}>
                <label>Address 1</label>
                <input type="text" placeholder="Address One" {...register('address_1', {required: {value: true, message: "Please enter your Address"}})}/>
            </div>
            <div className={`field ${errors.address_2 ? "error" : ""}`}>
                <label>Address 2</label>
                <input type="text" placeholder="Address Two" {...register('address_2')}/>
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
            <div className="buttons" style={{textAlign: 'right'}}>
                <button type="submit" disabled={submitting} className={`ui positive right labeled icon button ${loading && "loading"}`}>
                  Update
                  <i className="address card icon"></i>
                </button>
            </div>
        </form>
    )
}
export default SignUpPageThree
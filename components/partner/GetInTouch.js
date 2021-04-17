// import { Form, Field } from 'react-final-form'
import NumberField from '../../components/common/NumberField'
import style from '../../styles/partner/Partners.module.scss'
import { useForm } from 'react-hook-form'
// import { connect } from 'react-redux'
import { useState } from 'react'
// import { partnersRequest } from '../../actions'
const GetInTouch = ({ mobileNav, user, partnersRequest }) => {
    const [formState, setFormState] = useState({loading: false, msg: null})
    const { setValue, register, handleSubmit, formState: { errors } }  = useForm()
    const onSubmit = (formValues) => {
        // setFormState(state => {
        // return {...state, loading: true}
        // })
        // partnersRequest(formValues, setFormState)
        console.log(formValues)
    }
    const renderError = () => {
        if (errors.name || errors.email || errors.number || errors.detail){
            return true
        }
        return false
    }


    return (
            <div className={style.get_in_touch_container + " ui container"}>
                <h1>Start earning straight away. Share your details and we will reach out with next steps.</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className={`ui form ${style.partner_form} ${mobileNav ? "big" : "huge"}`}>
                        <div className={`field ${style.partner_field} ${errors.name && "error"}`}>
                            <input type="text" placeholder="Name" {...register('name', {required: {value: true, message: "Please enter a name"}})}/>
                        </div>
                        <NumberField register={register} errors={errors} fieldClass={style.partner_field}/>
                        <div className={`field ${style.partner_field} ${errors.email && "error"}`}>
                            <input type="text" placeholder="Email" {...register('email', {required: {value: true, message: "Please enter a email address"}, pattern: {value : /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/, message: "Please enter a valid Email Address"}})}/>
                        </div>
                        <div className={`field ${style.partner_field} ${errors.detail && "error"}`}>
                            <input type="text" placeholder="What do you do?" {...register('detail', {required: {value: true, message: "Please tell us what you do"}, minLength: {value: 5, message: "Please Tell us in more detail what you do"}})}/>
                        </div>
                        <button className={`big ui button ${style.partner_button} ${formState.loading ? "loading" : ""}`} type="submit">
                            Get in touch
                        </button>
                    </form>
                {renderError() || formState.msg ? (
                    <div className={`ui visible message large ${renderError() ? "red" : "blue"}`}>
                        <p>{formState?.msg?.message || errors.name?.message || errors.email?.message || errors.number?.message || errors.detail?.message}</p>
                    </div>
                ) : ""}
            </div>
    )
}
// const mapStateToProps = (state) => {
//     return {
//         mobileNav: state.mobileNav,
//         user: state.Authentication
//     }
// }
// export default connect(mapStateToProps, { partnersRequest })(GetInTouch)

export default GetInTouch
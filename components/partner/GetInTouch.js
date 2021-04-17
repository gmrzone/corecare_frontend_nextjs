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
    // const initialValue = user.loginStatus ? {name: `${user.first_name} ${user.last_name}`, email: user.email, number: user.number} : {}

    // const validateForm = (formValue) => {
    //     if (formValue.name && formValue.number && formValue.email && formValue.detail){
    //         let number = formValue.number
    //         if (number[0].match(/[0-6a-zA-Z+]/)){
    //             return {number: 'error'}
    //         }
    //         else if (number.length !== 10){
    //             return {number: 'error'}
    //         }
    //         else {
    //             return
    //         }
    //     }
    //     else{
    //         if (!formValue.name){
    //             return {name: 'error'}
    //         }
    //         else if (!formValue.number){
    //             return {number: 'error'}
    //         }
    //         else if (!formValue.email){
    //             return {email: 'error'}
    //         }
    //         else if (!formValue.detail){
    //             return {detail: 'error'}
    //         }
    //     }
    // }
    return (
            <div className={style.get_in_touch_container + " ui container"}>
                <h1>Start earning straight away. Share your details and we will reach out with next steps.</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className={`ui form ${style.partner_form} ${mobileNav ? "big" : "huge"}`}>
                        <div className={`field ${style.partner_field}`}>
                            <input type="text" placeholder="Name"/>
                        </div>
                        <NumberField register={register} errors={errors} fieldClass={style.partner_field}/>
                        <div className={`field ${style.partner_field}`}>
                            <input type="text" placeholder="Email"/>
                        </div>
                        <div className={`field ${style.partner_field}`}>
                            <input type="text" placeholder="What do you do?" />
                        </div>
                        <button className={`big ui button ${style.partner_button} ${formState.loading ? "loading" : ""}`} type="submit">
                            Get in touch
                        </button>
                    </form>
                {formState.msg && (
                    <div className={`ui visible message`}>
                        <p>{formState?.msg?.message}</p>
                    </div>
                )}
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
import Image from 'next/image'
import style from '../../styles/common/NumberField.module.scss'
const NumberField = ({ register, label, errors, fieldClass }) => {
    return(
        <div className={`field ${errors.number && "error"} ${fieldClass && fieldClass}`}>
            {label && <label>{label}</label>}
            <div className={style.main_input}>
                <div className={style.india_icon}>
                    {/* <img src={India} width={'30px'} alt="india-icon" style={{margin: "4px 4px 2px 4px", backgroundColor: 'white'}}/> */}
                    <Image src="/india.svg" width="30" height="30" alt="india_icon" className={style.india_icon_img}/>
                    <div style={{paddingRight: '4px'}}>+91</div>
                </div>
                <input placeholder="10 Digit Mobile No." maxLength="10" className={style.number_input} {...register("number", {required: {value: true, message: "Number field cannot be blank"}, pattern: {value: /^(7|8|9)\d{9}/, message: "Please Enter a valid number"}})}/>
            </div>
            
        </div>
    )
}
export default NumberField
// {props.meta.error ? props.setError({status: 'error', mssg: props.error}) : null}    
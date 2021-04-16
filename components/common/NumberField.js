import Image from 'next/image'
const NumberField = (props) => {
    return(
        <div className={`field ${props?.meta?.error && props?.meta?.touched && 'error'}`}>
            {props.label && <label>{props.label}</label>}
            <div className="main-input" style={{display: 'flex', alignItems: 'center', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px', borderRadius: '0.28571429rem', backgroundColor: 'white'}}>
                <div className="india-icon" style={{display: 'flex',  alignItems: 'center'}}>
                    {/* <img src={India} width={'30px'} alt="india-icon" style={{margin: "4px 4px 2px 4px", backgroundColor: 'white'}}/> */}
                    <Image src="/india.svg" width="30" height="30" alt="india-icon" />
                    <div style={{paddingRight: '4px'}}>+91</div>
                </div>
                <input placeholder="10 Digit Mobile No." {...props.input} style={{border: 'none', borderLeft: '1px solid #e6e6e6'}} maxLength="10" />
            </div>
            
        </div>
    )
}

export default NumberField
// {props.meta.error ? props.setError({status: 'error', mssg: props.error}) : null}    
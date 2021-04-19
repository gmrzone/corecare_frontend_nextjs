import style from '../../styles/service/CallToAction.module.scss'

const CallToAction = (props) => {
    return (
        <div className="ui container">
            <div className={style.call_to_action__con}>
                <div className={stylecall_to_action_content}>
                    <h2 className={style.title}>{props.title}</h2>
                    <p className={style.desc}>{props.desc}</p>
                </div>
                <div className={"ui secondary button " + style.call_to_action__btn} onClick={() => props.onClick()}>{props.buttonText}</div>
            </div>
        </div>
    )
}

export default CallToAction
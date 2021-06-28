const Card = (props) => {
    return (
        <div className="card fluid" style={{width: '100%'}}>
            <div className="content">
                <div className="">{props.header}</div>
                {props.meta && <div className="meta">{props.meta}</div>}
                <div className="description">{props.description}</div>
                {props.children && (<div>{props.children}</div>)}
            </div>
        </div>
    )
}

export default Card
const TextPlaceHolder = ({paragraph , className}) => {
    const renderLines = () => {
        let lines = []
        for (let i = 0; i < paragraph; i++){
            lines.push((
                <div className="paragraph" key={i}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            ))
        }
        return lines
    }
    return (
        <div className={`ui fluid placeholder ${className}`} style={{width: '100%'}}>
                {renderLines()}
        </div>
    )
}
export default TextPlaceHolder
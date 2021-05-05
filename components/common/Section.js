const Section = ({ children, title, description }) => {
    return (
        <div className="section__wrapper">
            <div className="ui container section_divider">
                <h3 className="slider-title">{title}</h3>
                {description ? <p>{description}</p> : ""}
                {children}
            </div>
            <style jsx>{`
                .slider-title {
                    margin-bottom: 0px;
                }
            `}</style>
        </div>
    )
}

export default Section
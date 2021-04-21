const Section = ({ children, title, description }) => {
    return (
        <div className="section__wrapper">
            <div className="ui container section_divider">
                <h3>{title}</h3>
                {description ? <p>{description}</p> : ""}
                {children}
            </div>
        </div>
    )
}

export default Section
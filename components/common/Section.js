const Section = ({ children, title, description }) => {
    return (
        <div className="ui container section_divider">
            <h4>{title}</h4>
            {description ? <p>{description}</p> : ""}
            {children}
        </div>
    )
}

export default Section
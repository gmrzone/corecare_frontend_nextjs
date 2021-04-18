const SignUpHeader = ({ title, subtitle }) => {
    return (
        <div className="ui message">
            <div className="header">
                {title}
            </div>
        <p>{subtitle}</p>
    </div>
    )
}

export default SignUpHeader
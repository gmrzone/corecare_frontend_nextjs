const AlignContent = ({children, align}) => {
    return (
        <div style={{display: "flex", justifyContent: align}}>
            {children}
        </div>
    )
}

export default AlignContent
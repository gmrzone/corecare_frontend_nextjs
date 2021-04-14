const DropDownSame = (props) => {
    const onClickDoubleTask = () => {
        props.click()
        props.closeDropDown(false)
    }
    return(
        <div className="drop-down-link" onClick={onClickDoubleTask} style={{cursor: 'pointer'}}>
            <div className="drop-down-item">
                {props.item}
            </div>
        </div>
    )
} 
export default DropDownSame
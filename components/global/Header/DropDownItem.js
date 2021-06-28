import Link from 'next/link'
const DropDownItem = (props) => {
    return(

            <Link href={props.to} className="drop-down-link">
                <a className="drop-down-link" onClick={() => props.closeDropDown(false)}>
                <div className="drop-down-item">
                {props.name}
                </div>
                </a>
            </Link>

    )
}

export default DropDownItem
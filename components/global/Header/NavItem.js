import Link from 'next/link'
const NavItem = (props) => {
    return(
        <li className="nav-item">
            <Link href={props.to} className="nav-link">
                {props.name}\
            </Link>
        </li>
    )
}

export default NavItem
import Link from 'next/link'
const NavItem = (props) => {
    return(
        <li className="nav-item">
            <Link href={props.to}>
                <a className="nav-link">{props.name}</a>
            </Link>
        </li>
    )
}

export default NavItem
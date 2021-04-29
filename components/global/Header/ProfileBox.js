import { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import DropDownItem from './DropDownItem'
import BackModal from '../../common/ModalBack';
import DropDownSame from './DropDownsame'
import { BaseCartContext } from '../../../context/basicCartContext'
import localStorageObj from '../../../data/localStorageObj'

const ProfileBox = (props) => {
    const { cartCount } = useContext(BaseCartContext)
    const [dropDownActive, setDropdownActive] = useState(false);
    const handleLogout = () => {
        localStorageObj._clearToken()
        props.mutateAuth(null, false)
    }
    const toggleDropdown = (e) => {
        setDropdownActive(!dropDownActive)
    }
    const closeDropDown = () => {
        setDropdownActive(false)
    }
    const renderDropDownItems = props.dropDownList.map((item, index) => {
        if (item.name === 'Signup'){
            return <DropDownSame click={props.openSignup} item={item.name} key={index} closeDropDown={setDropdownActive}/>
        }
        else if (item.name === 'Logout'){
            return <DropDownSame click={handleLogout} item={item.name} key={index} closeDropDown={setDropdownActive}/>
        }
        else{
            return <DropDownItem name={item.name} to={item.route} key={index} closeDropDown={setDropdownActive}/>
        }
    })
    useEffect(() => {
        const closeDropDown = (e) => {
            if(dropDownActive){
                setDropdownActive(false)
            }
        }
        document.body.addEventListener('click', closeDropDown)

        return () => {
            document.body.removeEventListener('click', closeDropDown)
        }
    }, [dropDownActive])

    return(
       
        <li className="nav-item profile-box" onClick={toggleDropdown}>
            <div className="profile-box-item">
                <div className="menu-icon">
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                </div>
                <div className="avatar">
                    {/* <img src={props.profileImage || "/default-profile.png"} className="avatar-image" alt="default-avatar"/> */}
                    <Image src={props.profileImage || "/default-profile.png"} width="30" height="30" className="avatar-image"/>
                </div>
                <div className="notification">{cartCount}</div>
            </div>
            {props.mobile && typeof window !== "undefined" ? <BackModal active={dropDownActive} available={props.mobile} closeModel={closeDropDown}/> : null}
            <div className={`profile-box-dropdown ${dropDownActive ? "active" : null}`} onClick={(e) => e.stopPropagation()}>
                {props.mobile ? (
                    <div className="nav-back-btn">
                        <i className="far fa-times" onClick={() => setDropdownActive(false)} />
                        <div className="close-text">Go back</div>
                    </div>) : null}
                {props.authentication ? <div className="nav-welcome-mssg">Welcome {props.authentication.username || props.authentication.first_name || props.authentication.number}</div> : ""}
                {renderDropDownItems}
            </div>
            <style jsx global>{`
                .notification {
                    padding: 2px 2px 0px 2px;
                    right: ${cartCount > 9 ? "-5px" : "0px"};
                }
            `}</style>
        </li>
    )
}


export default ProfileBox


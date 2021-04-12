import { useState, useEffect } from 'react'
import DropDownItem from './DropDownItem'
// import { CloseOutlined } from '@ant-design/icons'
import BackModel from '../../common/ModelBack';
// import { openSignup } from '../../actions'
import DropDownSame from './DropDownsame'
// import { logOut} from '../../actions'
const ProfileBox = (props) => {
    const [dropDownActive, setDropdownActive] = useState(false);
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
            return <DropDownSame click={props.logOut} item={item.name} key={index} closeDropDown={setDropdownActive}/>
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
                    <img src={props.profileImage || "/default-profile.png"} className="avatar-image" alt="default-avatar"/>
                </div>
                <div className="notification">{props.cartCount || 0}</div>
            </div>
            {props.mobile ? <BackModel active={dropDownActive} available={props.mobile} closeModel={closeDropDown}/> : null}
            <div className={`profile-box-dropdown ${dropDownActive ? "active" : null}`} onClick={(e) => e.stopPropagation()}>
                {props.mobile ? (
                    <div className="nav-back-btn">
                        <i className="fas fa-times" onClick={() => setDropdownActive(false)} />
                        <div className="close-text">Go back</div>
                    </div>) : null}
                {props.authentication.loginStatus ? <div className="nav-welcome-mssg">Welcome {props.authentication.username || props.authentication.first_name || props.authentication.number}</div> : ""}
                {renderDropDownItems}
            </div>
        </li>
    )
}
const mapStateToProps = (state) => {
    let cartCount = 0;
    Array.from(Object.values(state.basicCart)).forEach(x => {
        cartCount += x.quantity
    })
    return {
        cartCount
    }
}
// export default connect(mapStateToProps, { openSignup, logOut })(ProfileBox)
export default ProfileBox


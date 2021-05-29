import { useState, useEffect } from 'react'

const CategoryDropDown = ({ value, onCategoryChange }) => {
    const [dropDownActive, setDropDownActive] = useState(false)
    useEffect(() => {
        const closeOnBodyClick = () => {
            setDropDownActive(false)
        }
        document.body.addEventListener('click', closeOnBodyClick)
        return () => {
            document.body.removeEventListener('click', closeOnBodyClick)
        }
    }, [])
    const toggleDropDown = (e) => {
        if (!dropDownActive){
            e.stopPropagation()
        }
        setDropDownActive(s => !s)

    }
    return (
        <div className={`ui floating dropdown labeled search icon button fluid ${dropDownActive && "active visible"}`} onClick={toggleDropDown}>
        <i className="clipboard list icon"></i>
        <span className="text">{value}</span>
        <div className={`menu ${dropDownActive && "transition visible"}`}>
              <div className="item" onClick={onCategoryChange}>Electrician</div>
              <div className="item" onClick={onCategoryChange}>Cleaner</div>
              <div className="item" onClick={onCategoryChange}>Carpenter</div>
              <div className="item" onClick={onCategoryChange}>Plumber</div>
              <div className="item" onClick={onCategoryChange}>Painter</div>
              <div className="item" onClick={onCategoryChange}>Pert-Control</div>
              <div className="item" onClick={onCategoryChange}>Appliances</div>
              <div className="item" onClick={onCategoryChange}>AC Services</div>
              <div className="item" onClick={onCategoryChange}>Others</div>
        </div>
  </div> 
    )
}

export default CategoryDropDown
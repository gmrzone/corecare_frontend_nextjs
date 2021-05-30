import { useState, useEffect } from 'react';
import axios from '../../data/backendApi';
import useSWR from 'swr';
import { BASE_URL } from '../../data/_variables'
const CategoryDropDown = ({ value, onCategoryChange }) => {
    const [dropDownActive, setDropDownActive] = useState(false)
    const fetcher = (...args) => axios.get(...args).then(response => response.data)
    const {data: categoryData} = useSWR(BASE_URL, fetcher)
    useEffect(() => {
        const closeOnBodyClick = () => {
            setDropDownActive(false)
        }
        document.body.addEventListener('click', closeOnBodyClick)
        return () => {
            document.body.removeEventListener('click', closeOnBodyClick)
        }
    }, [])
    // useEffect(() => {
    //     axios.get('')
    //     .then(response => {
    //         setCategoryData(response.data)
    //     })
    // }, [])
    console.log("Category", categoryData)
    const toggleDropDown = (e) => {
        if (!dropDownActive){
            e.stopPropagation()
        }
        setDropDownActive(s => !s)

    }
    const renderOptions = categoryData?.map(x => {
        return <div className="item" onClick={() => onCategoryChange(x)} key={x.slug}>{x.name}</div>
    })
    return (
        <div className={`ui floating dropdown labeled search icon button fluid ${dropDownActive && "transition active visible"}`} onClick={toggleDropDown}>
        <i className="clipboard list icon"></i>
        <span className="text">{value}</span>
        <div className={`menu ${dropDownActive && "transition visible"}`}>
              {/* <div className="item" onClick={onCategoryChange}>Electrician</div>
              <div className="item" onClick={onCategoryChange}>Cleaner</div>
              <div className="item" onClick={onCategoryChange}>Carpenter</div>
              <div className="item" onClick={onCategoryChange}>Plumber</div>
              <div className="item" onClick={onCategoryChange}>Painter</div>
              <div className="item" onClick={onCategoryChange}>Pert-Control</div>
              <div className="item" onClick={onCategoryChange}>Appliances</div>
              <div className="item" onClick={onCategoryChange}>AC Services</div>
              <div className="item" onClick={onCategoryChange}>Others</div> */}
              {renderOptions}
              <div className="item" onClick={() => onCategoryChange({name: "Others", slug: 'others'})}>Others</div>
        </div>
  </div> 
    )
}

export default CategoryDropDown
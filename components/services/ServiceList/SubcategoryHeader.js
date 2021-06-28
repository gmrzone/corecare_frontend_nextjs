import style from '../../../styles/service/servicelist/ServiceList.module.scss'
import { useState, useEffect } from 'react'
const SubcategoryContent = ({ data, searchParam }) => {
    // Still need to fix search when search category is change the user is not directed to scrolled category
    const [activeCategory, setActiveCategory] = useState(null)
    const handleClick = (data) => {
        if (data){
            const element = document.getElementById(data)
            if (element){
                console.log(data, "Afzal")
                element.scrollIntoView({
                    behavior: 'smooth'
                    })
                    setActiveCategory(data)
            }
        }

     }
    useEffect(() => {
        setActiveCategory(data[0].slug)
        return () => {
            setActiveCategory(null)
        }
    }, [data])

    useEffect(() => {
        if (searchParam){
            handleClick(searchParam)
        }

    }, [searchParam])

    const renderSubcategory = data.map((x, i) => {
        
        return(
            // <div key={x.id} dataslug={x.slug} className={`subcategory-item ${i === 0 ? "active-sub-item" : ""}`} onClick={handleClick}>
            <div key={x.id} dataslug={x.slug} className={`${style.subcategory_item} ${x.slug === activeCategory ? style.active_sub_item : ""}`} onClick={() => handleClick(x.slug)} >
                <span onClick={() => handleClick(x.slug)}>{x.name}</span>
            </div>
        )

    })
    return (
        <div className={style.subcategory_container}>
            <div className={style.subcategory_outer_container}>
                <div className={style.subcategory_inner_container}>
                    {renderSubcategory}
                </div>
            </div>
        </div>
    )
}

export default SubcategoryContent
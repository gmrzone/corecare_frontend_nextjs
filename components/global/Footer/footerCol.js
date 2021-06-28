import { useState, useRef } from 'react';
import Link from 'next/link'
const FooterCol= (props) => {
    const [toggleAccordian, setToggleAccordian] = useState(false)
    const AccordianContent = useRef()
    const renderItem = props.items.map((x, i) => {
        return (
        <Link href={x.path} key={i}>
            <a  className="footer-item-col__2" style={{display: 'block'}}>{x.name}</a>
        </Link>
        )
    })
    const toggleAccordianAction = (e) => {
        callback(!toggleAccordian)
        setToggleAccordian(!toggleAccordian)
       
    }   
    const callback = (status) => {
        if (status){
            AccordianContent.current.style.display = "block"
            setTimeout(openAccordian, 30)
        }
        else{
            AccordianContent.current.style.height = "0px";
            AccordianContent.current.style.opacity = "0";
            setTimeout(closeAccordian, 300)
        }
    }
    const openAccordian = () => {
        AccordianContent.current.style.height = "auto";
        AccordianContent.current.style.opacity = "1";
    }
    const closeAccordian = () => {
        AccordianContent.current.style.display = "none"
    }
    const accourdianContentStyle = props.mobileNav ? {translate: '0.3s all', opacity:"0", display: 'none', height:"0px" } : { opacity:"1", display: 'block', height: 'auto'}
    return(
        <div className="footer-col__2">
        <div className="col-header">
            <h4>{props.header}</h4>
            {props.mobileNav ? <div className="accordian__icon" onClick={toggleAccordianAction}><i className="plus icon"></i></div> : ""}
        </div>
        <div className={`col-Container`} ref={AccordianContent} style={accourdianContentStyle}>
            {renderItem}
        </div>
    </div>
    )
}

export default FooterCol
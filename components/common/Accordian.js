import AccordionItem from './AccordianItem'
import { useState } from 'react';
import style from '../../styles/common/Accordian.module.scss'
const Accordion = ({ items }) => {  
    const [activeAccordian, setActiveAccordian] = useState(0)
    const activateAccordian = (index) => {
        index === activeAccordian ? setActiveAccordian(null) : setActiveAccordian(index)
    }
    const renderItems = items.map((item, index) => {
                            return (
                               <AccordionItem key={index} item={item} active={activeAccordian === index} onClick={activateAccordian} index={index}/>
                            )
                        })
   

    return (
        <div className={style.accordian_container}>
            {renderItems}
        </div>
    )
}

export default Accordion;
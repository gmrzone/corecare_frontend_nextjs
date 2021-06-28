import style from '../../styles/common/Accordian.module.scss'

const AccordianItem = ({ item, active, index, onClick }) => {


    return (
        <div className={`${style.accordian_item} ${active && style.active}`} onClick={() => onClick(index)}>
            <div className={style.title}>
                <i className='dropdown icon'></i>
                <h4>{item.title}</h4>
            </div>
            <div className={style.content}>
                <p>{item.content}</p>
            </div>  
        </div>

    )  
}



export default AccordianItem
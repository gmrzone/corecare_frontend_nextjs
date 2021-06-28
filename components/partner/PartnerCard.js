import style from '../../styles/partner/PartnersCard.module.scss'
const PartnerCard = ({ children, heading, subheading }) => {
    return (
        <div className={style.partner_card}>
            <h1 className={style.heading}>{heading}</h1>
            <div className={style.subheading}>{subheading}</div>
            {children}
        </div>
    )
}

export default PartnerCard
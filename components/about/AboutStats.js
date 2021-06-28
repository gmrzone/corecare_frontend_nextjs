import style from '../../styles/about/About.module.scss'
const AboutStats = () => {
    return (
        <div className={style.about_section__stats}>
            <div className={style.about_section__item + " one"}>
                <p className={style.about_section__itemH}>25,000+</p>
                <p className={style.about_section__itemS}>Trained Professionals</p>
            </div>
            <div className={style.about_section__item + " two"}>
                <p className={style.about_section__itemH}>5 Million+</p>
                <p className={style.about_section__itemS}>Happy Customers</p>
            </div>
            <div className={style.about_section__item + " three"}>
                <p className={style.about_section__itemH}>30</p>
                <p className={style.about_section__itemS}>Cities</p>
            </div>
            <div className={style.about_section__item + " four"}>
                <p className={style.about_section__itemH}>2</p>
                <p className={style.about_section__itemS}>Countries</p>
            </div>
        </div>
    )
}

export default AboutStats
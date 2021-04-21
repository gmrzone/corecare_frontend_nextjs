import style from '../../styles/service/HeroImage.module.scss';
import reactDom from 'react-dom';

const HeroImage = (props) => {
    const renderBullet = props.bullets.map((x, i) => <p key={i} className={"item " + style.bullets_p}>{x}</p>)

    return (
        <div className={style.hero_image_container} style={{background: `linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%), url(${props.src})`}}>
        <div className="ui container content">
            <div className={style.main_title}>
                <h1 className={style.main_title_text}>{props.mainTitle}</h1>
            </div>
            <div className={style.bullet_points}>
                <div className="ui bulleted list">
                    {renderBullet}
                </div>
            </div>
        </div>
        </div>
    )
}
export default HeroImage

import style from '../../styles/home/MainImage.module.scss';
import MainSearch from './MainSearch'

const MainImage = (props) => {

    return (
        <div className={style.main_image_con}>
            <div className="ui container">
                <div className={style.main_title}>
                    <h1>Home of the Experts</h1>
                </div>
                <MainSearch />
            </div>
        </div>
    )
}

export default MainImage
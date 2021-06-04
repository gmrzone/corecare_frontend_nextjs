import style from '../../../styles/utils/TopPost.module.scss'
const TopPostSlider = ({ data }) => {
    return (
        <div className={style.slider_outer}>
            <div className={style.slider_inner}>
                {data}
            </div>
        </div>
    )
}

export default TopPostSlider
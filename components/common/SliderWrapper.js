import style from '../../styles/home/SliderWrapper.module.scss'
const SliderWrapper = ({ data, image }) => {
    const RenderSliderItem = data.map(x => {
        return (
        <div className={style.slider_item} key={x.id}>
            {image ? (
                <div className={style.slider_item_image}>

                </div>
            ) : (
                <div className={style.slider_item_content}>
                    <p>{x.code}</p>
                </div>
            )}
        </div>  
        )
    })
    return (
        <div className={style.slider_container}>
            <div className={style.slider_inner_container}>
                {RenderSliderItem}
            </div>
        </div>
    )
}

export default SliderWrapper
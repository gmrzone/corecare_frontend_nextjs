import style from '../../../styles/utils/TopPost.module.scss'
import { useRef, useState } from 'react'
const TopPostSlider = ({ data }) => {
    const data_len = data?.length
    const [sliderPosition, setSliderPosition] = useState(0)
    const desktopInnerWidth = data_len ? (320 * data_len) + (20 * (data_len - 1)): 0
    const slideWidth = (desktopInnerWidth) / data_len + 2
    const outerRef = useRef()
    const slideLeft = () => {
        const stopSlidingLeft = desktopInnerWidth - outerRef.current.clientWidth + 20

        if (sliderPosition > -1343  ){
            setSliderPosition(s => s - slideWidth)
        }
        else {
            setSliderPosition(-stopSlidingLeft)
        }
        

    }
    const slideRight = () => {
        if (sliderPosition < -235) {
            setSliderPosition(s => s + slideWidth)
        }
        else {
            setSliderPosition(0)
        }

    }
    console.log(sliderPosition)
    return (
        <div className={style.slider_outer} ref={outerRef}>
                <i className={`chevron circle left icon " + ${style.desktop_slide_icon} ${style.left}`}  onClick={slideLeft}/>
                <i className={`chevron circle right icon " + ${style.desktop_slide_icon} ${style.right}`} onClick={slideRight}/>
            <div className={style.slider_inner + " inner"}>
                {data}
            </div>
            <style jsx>{`
                .inner {
                    width: 100%;
                }


                @media (min-width: 993px){
                        .inner {
                            width: ${desktopInnerWidth}px;
                            transform: translateX(${sliderPosition}px);
                            transition: transform 0.4s ease-in-out;
                        }

                    }
            `}</style>
        </div>
    )
}

export default TopPostSlider
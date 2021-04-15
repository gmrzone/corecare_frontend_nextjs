import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import style from '../../styles/home/SliderWrapper.module.scss'
import Link from 'next/link'
import { BASE_URL } from '../../data/_variables'
const SliderWrapper = ({ data, image, mobileNav, review }) => {
    const innerContainer = useRef()
    const sliderouterContainer = useRef()
    const currentTrans = useRef(0)
    const [sliderState, setSliderState] = useState({itemWidth: 240, containerWidth: ''})
    const {itemWidth, containerWidth} = sliderState
    const screenWidth = typeof window === "undefined" ? null : window.innerWidth
    useEffect(() => {
        let itemWidth;
        let containerWidth;
        if (screenWidth > 992 && screenWidth < 1150){
            itemWidth = sliderouterContainer.current.clientWidth / 3 - 10
        }
        else {
            itemWidth = sliderouterContainer.current.clientWidth / 4 - 10
        }
        containerWidth = (itemWidth + 10) * data.length
        setSliderState({itemWidth: itemWidth, containerWidth: containerWidth})

    }, [data.length, sliderouterContainer, screenWidth])
    const RenderSliderItem = data.map((x, i) => {
        return (
            <div className={style.slider_item + " slider_item"} key={x.id || i}>
                {image ? (
                    <Link href={`/service/${x.service_specialist?.slug}`} key={x.id}>
                        <div className={style.slider_item_image + " image-slider-item"}>
                            <p className={style.slider_item_image_text}>{x.name}</p>
                            <Image src={BASE_URL + x.icon} layout="fill" objectFit="cover" className={style.slider_image} />
                        </div>
                    </Link>
                ) : (
                    <div className={style.slider_item_content}>
                        {x.code && (
                            <>
                            <p>{x.code}</p>
                            <p>Get {x.discount}% Discount</p>
                            </>
                            )}
                    </div>
                )}
            </div>
        )
    })
    const renderReviewItem = data.map((x, i) => {
        return (
            <div className={"comment " + style.review_slider_item} key={i}>
                <div className="item-header">   
                    <span className="avatar">
                        <Image src={x.image} width={40} height={40} alt="profile" className="review-profile"/>
                    </span>
                    <span className="author">{x.name}</span>
                </div>
                <div className="content">   
                <div className="text" dangerouslySetInnerHTML={{ __html: x.msge }}>
                </div>
                </div>
            </div>
        )
    })
    const leftClick = (e) => {
        if (currentTrans.current + sliderState.itemWidth >= 0){
            innerContainer.current.style.transform = "translateX(0px)"
            currentTrans.current = 0
        }
        else{
            if (screenWidth > 992 && screenWidth < 1150){
                innerContainer.current.style.transform = `translateX(${currentTrans.current + sliderouterContainer.current.clientWidth / 3}px)`
                currentTrans.current = currentTrans.current + sliderouterContainer.current.clientWidth / 3
            }
            else{
                innerContainer.current.style.transform = `translateX(${currentTrans.current + sliderouterContainer.current.clientWidth / 4}px)`
                currentTrans.current = currentTrans.current + sliderouterContainer.current.clientWidth / 4
            }

        }
    }
    const rightClick = (e) => {
        const slidableWidth = sliderState.containerWidth - sliderouterContainer.current.clientWidth
        
        if ((currentTrans.current - sliderState.itemWidth) <= -slidableWidth){
            innerContainer.current.style.transform = `translateX(${-slidableWidth}px)`
            currentTrans.current = -slidableWidth
        }
        else{
            // innerContainer.current.style.transform = `translateX(${currentTrans.current - sliderState.itemWidth - 10}px)`
            // currentTrans.current = currentTrans.current - sliderState.itemWidth
            if (screenWidth > 992 && screenWidth < 1150){
                    innerContainer.current.style.transform = `translateX(${currentTrans.current - sliderouterContainer.current.clientWidth / 3}px)`
                    currentTrans.current = currentTrans.current - sliderouterContainer.current.clientWidth / 3
                    
            }
            else{
                innerContainer.current.style.transform = `translateX(${currentTrans.current - sliderouterContainer.current.clientWidth / 4}px)`
                currentTrans.current = currentTrans.current - sliderouterContainer.current.clientWidth / 4
            }
        }
    }
    const renderSliderHandle = () => {
        if (!mobileNav){
            return (
                <>
                    <i className={style.left_icon + " fad fa-chevron-circle-left"} onClick={leftClick}/>
                    <i className={style.right_icon + " fad fa-chevron-circle-right"} onClick={rightClick}/>
                </>
            )
        }
    }
    return (
        <div className={style.slider_container} ref={sliderouterContainer}>
            {renderSliderHandle()}
            <div className="semi-outer-container">
                <div className={style.slider_inner_container + " inner_container"} ref={innerContainer}>
                    {review ? renderReviewItem : RenderSliderItem}
                </div>
            </div>
            <style jsx>{`
                .inner_container {
                    grid-auto-columns: ${mobileNav ? "240px" : sliderState.itemWidth + "px"};
                    width: ${mobileNav ? "auto" : sliderState.containerWidth + "px"};
                    transform: translateX(${currentTrans.current}px);
                    will-change: transform;
                    scroll-behavior: smooth;
                    transition: transform 0.5s;
                }
                .semi-outer-container {
                    overflow: hidden;
                    width: 100%;
                    height: 100%;
                }
                .image-slider-item {
                    width: ${mobileNav ? "240px" : sliderState.itemWidth + "px"};
                    height: ${mobileNav ? "200px" : "240px"};
                    position: relative;
                }
            `}</style>
        </div>
    )
}

export default SliderWrapper
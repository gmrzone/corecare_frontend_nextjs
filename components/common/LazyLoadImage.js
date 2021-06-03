import { useEffect, useRef, useState } from 'react';

const LazyLoadImage = ({ src, alt_text, class_name }) => {
    const imageRef = useRef()
    console.log(class_name)
    const placeHolderRef = useRef(false)
    const [inView, setInVIew] = useState(false)
    const [_, setImageLoaded] = useState(false)

    useEffect(() => {
        const option = {}
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(x => {
                if (x.isIntersecting){
                    setInVIew(true)
                    observer.unobserve(x.target)
                }
            })
        }, option)
        observer.observe(placeHolderRef.current)
    }, [])
    const showImage = () => {
        imageRef.current.style.opacity = "1"
    }
    const hidePlaceHolder = () => {
        placeHolderRef.current.style.display = "none"
        imageRef.current.style.display = "block";
        setTimeout(showImage, 20)
    }
    const ImageLoaded = () => {
        setImageLoaded(true)
        placeHolderRef.current.style.opacity = "0"
        setTimeout(hidePlaceHolder, 200)
    }
    const imageStyle = {
        opacity: "0",
        transition: "0.2s opacity ease-in-out",
        display: 'none'
    }
    const placeholderStyle = {
        height: "191px",
        opacity: 1,
        transition: '0.2s opacity ease-in-out',
        display: "block"
    }
    return (
        <>
            {inView && <img src={src} alt={alt_text} ref={imageRef} style={imageStyle} onLoad={ImageLoaded}/>}
            <div className="ui placeholder" style={{...placeholderStyle}} ref={placeHolderRef} className={class_name}>
                <div className="image"></div>
            </div>
        </>
    )
}

export default LazyLoadImage
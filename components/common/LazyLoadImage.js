import { useEffect, useRef, useState } from 'react';

const LazyLoadImage = ({ src, alt_text, class_name, width, height }) => {
    const imageRef = useRef()
    const placeHolderRef = useRef(false)
    const [inView, setInVIew] = useState(false)

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
        placeHolderRef.current.style.opacity = "0"
        setTimeout(hidePlaceHolder, 200)
    }
    const imageStyle = {
        opacity: "0",
        transition: "0.2s opacity ease-in-out",
        display: 'none',
        width: "100%"
    }

    return (
        <>
            {inView && <img src={src} alt={alt_text} ref={imageRef} style={imageStyle} onLoad={ImageLoaded}/>}
            <div className={`ui placeholder ${class_name}`} ref={placeHolderRef}>
                <div className="image"></div>
                <style jsx>{`
                    .ui.placeholder {
                        height: ${height || "200px"};
                        opacity: 1;
                        transition: 0.2s opacity ease-in-out;
                        display: block;
                    }
                
                `}</style>
            </div>
        </>
    )
}

export default LazyLoadImage
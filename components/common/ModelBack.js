import reactDom from 'react-dom';
import { useEffect, useRef } from 'react'
const BackModel = ({ active, closeModel , children, zIndex }) => {
    const modelRef = useRef()
    useEffect(() => {
       
        const open = () => {
            modelRef.current.classList.add('active')
        }
        const close = () => {
            if (modelRef.current){
                modelRef.current.style.display = "none"
            }
            
        }

        if(active){
            modelRef.current.style.display = "flex"
            setTimeout(open, 70)
        }
        else {
            modelRef.current.classList.remove('active')
            setTimeout(close, 300)
        }
        
    }, [active])

    return  (
        <div className="backmodel" ref={modelRef} style={children ? {display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: zIndex} : {zIndex: zIndex}} onClick={() => closeModel()}>
            {children}
        </div>
    )
}
BackModel.defaultProps = {
    zIndex: '100'
}
export default BackModel
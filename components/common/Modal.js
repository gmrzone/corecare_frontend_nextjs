import style from '../../styles/common/Modal.module.scss'
import { useRef, useEffect } from 'react'
const Modal = ({ active, children, header, closeModel, zIndex }) => {
    const innerModelRef = useRef()
    const modelRef = useRef()
    useEffect(() => {
       
        const open = () => {
            if (modelRef.current){
                modelRef.current.classList.add('active')
            }
            
        }
        const close = () => {
            if (modelRef.current){
                modelRef.current.style.display = "none"
            }
            
        }

        if(active){
            modelRef.current.style.display = "flex"
            setTimeout(open, 30)
        }
        else {
            modelRef.current.classList.remove('active')
            setTimeout(close, 300)
        }
        
    }, [active])
    return (
        <div className="backmodel" ref={modelRef} style={children ? {display: 'none', justifyContent: 'center', alignItems: 'center', zIndex: zIndex} : {zIndex: zIndex}} onClick={() => closeModel()}>
            <div className={`${style.inner_model_box} ${active ? "activated" : ""}`} ref={innerModelRef} onClick={(e) => e.stopPropagation()}>
                <i className="far fa-times" style={{float: 'right', cursor: 'pointer'}} onClick={() => closeModel()} />
                <div className={style.inner_model_header}>{header}</div>
                <div className={style.content} style={{paddingBottom: '0px'}}>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Modal
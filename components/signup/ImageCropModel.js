import ReactDom from 'react-dom';
import style from '../../styles/signup/ProfileAvatar.module.scss'
const ImageCropModel = ({ children }) => {
    // const CloseCropModel = (e) => {
    //     e.stopPropagation()
    //     closeCropModel()
    // }
    return ReactDom.createPortal(
    <div className={style.image_crop_model_container}>
        <div className={style.image_crop_model}>
            {children}
        </div>
    </div>,
    document.getElementById('model')
    )
}


export default ImageCropModel;
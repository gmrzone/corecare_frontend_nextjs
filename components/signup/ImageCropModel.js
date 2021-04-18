import ReactDom from 'react-dom';
const ImageCropModel = ({ children }) => {
    // const CloseCropModel = (e) => {
    //     e.stopPropagation()
    //     closeCropModel()
    // }
    return ReactDom.createPortal(
    <div className="image-crop-model-container">
        <div className="image-crop-model">
            {children}
        </div>
    </div>,
    document.getElementById('image-cropper')
    )
}


export default ImageCropModel;
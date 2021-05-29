import style from '../../styles/utils/imageInput.module.scss';

const ImageInput = ({ handleFileChange }) => {
    return (
        <div className={style.image_input}>
            <input type="file" className={style.hidden_input} onChange={handleFileChange} accept="image/" />
            <div className={style.visible_input}>
                <div className={style.input_text}>Please Select a Post Image</div>
            </div>
        </div>
    )
}

export default ImageInput
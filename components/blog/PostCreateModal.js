import { useEffect, useRef, useState } from 'react';
import style from '../../styles/blog/postCreate.module.scss';
import CreateForm from './CreateForm'
import BlogImageCropper from './BlogImageCropper'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';


const PostCreateModal = ({ modalProps, mobileNav }) => {
    const ImageInputRef = useRef()
    const { createModelActive, setCreateModalActive, textEditorLoading, setTextEditorLoading } = modalProps
    const [cropperModalActive, setCropperModalActive] = useState(false)
    const [fileSrc, selectFileSrc] = useState(null)
    const [imageType, setImageType] = useState('null')
    const [crop, setCrop] = useState({ aspect: 16 / 9, unit: 'px', x: 0, y: 0, width: 267, height: 150});
    const [loadedImage, setLoadedImage] = useState(null)
    const [completedCrop, setCompletedCrop] = useState(null);
    const modalBack = useRef()
    const modalMain = useRef()

    const activateModal = () => {
        modalBack.current.style.opacity = "1";
        modalMain.current.style.transform = "translateX(0px)"
        modalMain.current.style.opacity = "1";
    }

    const deactivateModal = () => {
        modalMain.current.style.display = "none";
        modalBack.current.style.display = "none";
    }

    useEffect(() => {
        if (createModelActive){
            modalBack.current.style.display = "block";
            modalMain.current.style.display = "block";
            setTimeout(activateModal, 50)
        }
        else {
            modalBack.current.style.opacity = "0";
            modalMain.current.style.transform = mobileNav ? "translateX(100%)" : "translateX(900px)"
            modalMain.current.style.opacity = "0";
            setTimeout(deactivateModal, 500)
        }
    }, [createModelActive])
    const closeCropperModal = () => {
        setCropperModalActive(false)
        ImageInputRef.current.value = null
        selectFileSrc(null)
    }

    return (
        <>
        <div className={style.modal_back} ref={modalBack} onClick={() => setCreateModalActive(false)}>
        </div>
        <BlogImageCropper cropperModalActive={cropperModalActive} closeCropperModal={closeCropperModal} fileSrc={fileSrc} selectFileSrc={selectFileSrc} imageType={imageType} setCompletedCrop={setCompletedCrop} loadedImage={loadedImage} crop={crop}>
            <ReactCrop src={fileSrc} crop={crop} onChange={newCrop => setCrop(newCrop)} onImageLoaded={setLoadedImage}/>
        </BlogImageCropper>
        <div className={style.post_create_modal} ref={modalMain}>
            <div className={style.modal_close}>
                <i className={`fal fa-times ${style.close_icon}`} onClick={() => setCreateModalActive(false)}/>
                <h2 className={style.modal_title}>Create blog post</h2>
            </div>
            <div className={style.modal_content}>
                <CreateForm setTextEditorLoading={setTextEditorLoading} selectFileSrc={selectFileSrc} setCropperModalActive={setCropperModalActive} setImageType={setImageType} ImageInputRef={ImageInputRef} completedCrop={completedCrop}/>
            </div>
        </div>
        </>
    )
}

export default PostCreateModal
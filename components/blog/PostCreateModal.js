import { useEffect, useRef } from 'react';
import style from '../../styles/blog/postCreate.module.scss';
import CreateForm from './CreateForm'

const PostCreateModal = ({ modalProps, mobileNav }) => {
    const { createModelActive, setCreateModalActive, textEditorLoading, setTextEditorLoading } = modalProps

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
    return (
        <>
        <div className={style.modal_back} ref={modalBack}>
        </div>
        <div className={style.post_create_modal} ref={modalMain}>
            <div className={style.modal_close}>
                <i className={`fal fa-times ${style.close_icon}`} onClick={() => setCreateModalActive(false)}/>
                <h2 className={style.modal_title}>Create blog post</h2>
            </div>
            <div className={style.modal_content}>
                <CreateForm setTextEditorLoading={setTextEditorLoading}/>
            </div>
        </div>
        </>
    )
}

export default PostCreateModal
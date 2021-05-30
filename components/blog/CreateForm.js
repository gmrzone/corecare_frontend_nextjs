
import dynamic from 'next/dynamic';
import { useState, useContext } from 'react'
import CategoryDropDown from './CategoryDropdown'
import ImageInput from './ImageInput'
import style from '../../styles/blog/postCreate.module.scss';
import djangoApi from '../../data/backendApi'
import { CsrfContext } from '../../context/CsrfTokenContext'
// const RichTextEditor = dynamic(() => import('./RichTextEditorNEw/RichTextEditor'), {ssr: false})

const CkeditroEditor = dynamic(() => import('./ckeditor/Editor'), {ssr: false})
const CreateForm = ({ setTextEditorLoading, selectFileSrc, setCropperModalActive, setImageType,  ImageInputRef, completedCrop }) => {
    const { csrfToken, mutateCsrf } = useContext(CsrfContext)
    const initialFormState = { 'title': "",category: "Select Category"  ,body: "", image: "" }
    const [formState, setFormState] = useState(initialFormState)
    const initialErrorState = {title: "", image: "", category: "", body: "", status: ""}
    const [formError, setFormError] = useState(initialErrorState)
    const onTitleChange = (e) => {
          setFormState(state => {
                return {...state, 'title': e.target.value}
          })
    }
    const onBodyChange = (data) => {
          setFormState(state => {
                return {...state, body: data}
          })
    }
    const onCategoryChange = (e) => {
            setFormState(state => {
                  return {...state, category: e.target.textContent}
            })
    }

    const onFormSubmit = (e) => {
      e.preventDefault()
      if (formState.title && formState.body && formState.category){
            const formData = new FormData()
            formData.append('title', formState.title)
            if (completedCrop){
                  formData.append('photo', completedCrop)
            }
            formData.append('body', formState.body)
            const headers = {headers: {'X-CSRFToken': csrfToken}}
            djangoApi.post(`blog/posts/create/${formState.category}/`, formData, headers)
            .then(response => {
                  setFormError({status: "ok", title: response.data.message})
                  setFormState(initialFormState)
            })
            .catch(e => {
                  alert("EndPoint Not available")
            })
      }
      else {
            setFormError(initialErrorState)
            const error = !formState.title ? {field: "title", msg: "Title cannot be empty"} : formState.category === "Select Category" ? {field: "category", msg: "Please select a post Category"} : {field: "body", msg: "Post cannot have empty body"}
            console.log(error)
            setFormError(state => {
                  return {...state, status:"error", [error.field]: error.msg}
            })
      }


          
    }
    const handleFileChange = (e) => {
      const file = e.target.files[0]
      if (file && file.type === "image/jpeg" || file.type === "image/png") {
            setImageType(file.type)
            const imageBlob = file
            let reader = new FileReader();
            reader.readAsDataURL(imageBlob)
            reader.onloadend = function(){
                selectFileSrc(reader.result)
                setCropperModalActive(true)
            }
      }
      else{
            setFormError(state => {
                  return {...state, status: "error", image: "Unsupported Image Format please Select JPG or PNG"}
            })
      }   
  }
    return (
        <form className="ui form huge" onSubmit={onFormSubmit}>
              {formError.status && <div className={`ui message mini ${formError.status === "error" ? "red" : "green"}`}>{formError.title || formError.category || formError.body || formError.image}</div>}
              <div className="field">
                  <div className="ui labeled input">
                  <div className="ui label">
                        Title
                  </div>
                        <input type="text" name="first-name" placeholder="Title" value={formState.title} onChange={onTitleChange}/>
                  </div>
              </div>
              <div style={style.category_and_image}>
                  <div className="field">
                        <CategoryDropDown value={formState.category} onCategoryChange={onCategoryChange}/>
                  </div>
                  <div className="field">
                        <ImageInput handleFileChange={handleFileChange} ImageInputRef={ImageInputRef}/>
                  </div>
              </div>
              <div className="field">
                    {/* <label>Body</label> */}
                    {/* <RichTextEditor /> */}
                    <CkeditroEditor setTextEditorLoading={setTextEditorLoading} value={formState.body} onBodyChange={onBodyChange}/>
              </div>
              <div className="action" style={{textAlign: 'right'}}>
                  <button className="ui secondary button large">
                        Create
                  </button>
              </div>
        </form>
    )
}

export default CreateForm
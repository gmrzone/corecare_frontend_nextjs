
import dynamic from 'next/dynamic';
import { useState } from 'react'
import CategoryDropDown from './CategoryDropdown'
import ImageInput from './ImageInput'
import style from '../../styles/blog/postCreate.module.scss';
// const RichTextEditor = dynamic(() => import('./RichTextEditorNEw/RichTextEditor'), {ssr: false})

const CkeditroEditor = dynamic(() => import('./ckeditor/Editor'), {ssr: false})
const CreateForm = ({ setTextEditorLoading }) => {
    const [formState, setFormState] = useState({ 'title': "",category: "Select Category"  ,body: "", image: "" })
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
          console.log(formState)
    }
    return (
        <form className="ui form huge" onSubmit={onFormSubmit}>
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
                        <ImageInput />
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
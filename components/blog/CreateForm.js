
import dynamic from 'next/dynamic';
import { useState } from 'react'

// const RichTextEditor = dynamic(() => import('./RichTextEditorNEw/RichTextEditor'), {ssr: false})

const CkeditroEditor = dynamic(() => import('./ckeditor/Editor'), {ssr: false})
const CreateForm = ({ setTextEditorLoading }) => {
    const [formState, setFormState] = useState({ 'title': "", body: "", image: "" })
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
    console.log(formState)
    return (
        <form className="ui form huge">
              <div className="field">
                    <label>Title</label>
                    <input type="text" name="first-name" placeholder="Title" value={formState.title} onChange={onTitleChange}/>
              </div>
              <div className="field">
                    <label>Body</label>
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
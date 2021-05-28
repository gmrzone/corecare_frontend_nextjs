
import dynamic from 'next/dynamic';


// const RichTextEditor = dynamic(() => import('./RichTextEditorNEw/RichTextEditor'), {ssr: false})

const CkeditroEditor = dynamic(() => import('./ckeditor/Editor'), {ssr: false})
const CreateForm = () => {
    return (
        <form className="ui form huge">
              <div className="field">
                    <label>Title</label>
                    <input type="text" name="first-name" placeholder="Title" />
              </div>
              <div className="field">
                    <label>Body</label>
                    {/* <RichTextEditor /> */}
                    <CkeditroEditor />
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
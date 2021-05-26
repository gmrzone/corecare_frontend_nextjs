// import RichTextEditor from './RichTextEditor/CreateRichTextEditor';
import dynamic from 'next/dynamic';

// const RichTextEditor = dynamic(() => import("./RichTextEditor/CreateRichTextEditor"), {
//     ssr: false,
//   })

const RichTextEditor = dynamic(() => import('./RichTextEditorNEw/RichTextEditor'), {ssr: false})


const CreateForm = () => {
    return (
        <form className="ui form huge">
              <div className="field">
                    <label>Post Title</label>
                    <input type="text" name="first-name" placeholder="First Name" />
              </div>
              <div className="field">
                    <label>Post Body</label>
                    <RichTextEditor />
              </div>
              
        </form>
    )
}

export default CreateForm
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import EditorNew from 'ckeditor5-custom-build';
import { BASE_URL } from '../../../data/_variables';
import { CsrfContext } from '../../../context/CsrfTokenContext';
import { useContext } from 'react'

const Editor = ({ setTextEditorLoading, value , onBodyChange }) => {
  const { csrfToken } = useContext(CsrfContext)
  const configuration = {
    toolbar: {
        items: [
            "heading",
            "|",
            "bold",
            "italic",
            "underline",
            "|",
            "alignment",
            "selectAll",
            "horizontalLine",
            "blockQuote",
            "codeblock",
            "|",
            "fontColor",
            "fontBackgroundColor",
            "fontSize",
            "link",
            "|",
            "bulletedList",
            "numberedList",
            "|",
            "uploadImage",
            "imageInsert",
            'imageStyle:full', 
            'imageStyle:side',
            "mediaEmbed",
            "|",
            "insertTable",
            "undo",
            "redo",
          ],
        //   shouldNotGroupWhenFull: true
    },
    image: {
        styles: [ 'full', 'side' ]
    },
    codeBlock: {
        languages: [
          { language: 'plaintext', label: 'Plain text' }, // The default language.
          { language: 'c', label: 'C' },
          { language: 'cs', label: 'C#' },
          { language: 'cpp', label: 'C++' },
          { language: 'css', label: 'CSS' },
          { language: 'diff', label: 'Diff' },
          { language: 'html', label: 'HTML' },
          { language: 'java', label: 'Java' },
          { language: 'javascript', label: 'JavaScript' },
          { language: 'php', label: 'PHP' },
          { language: 'python', label: 'Python' },
          { language: 'ruby', label: 'Ruby' },
          { language: 'typescript', label: 'TypeScript' },
          { language: 'xml', label: 'XML' }
        ]
    },
    simpleUpload: {
        uploadUrl: BASE_URL + '/blog/posts/images/',
        withCredentials: true,
        headers: {
          'X-CSRFToken': csrfToken,
        }
        
    },  
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
      ],
    },
  };
  return (
    <CKEditor
      editor={EditorNew}
      data={value}
      config={configuration}
      onReady={(editor) => {
        setTextEditorLoading(false)
        // You can store the "editor" and use when it is needed.
        // Insert the toolbar before the editable area.
        //     editor.ui.getEditableElement().parentElement.insertBefore(
        //     editor.ui.view.toolbar.element,
        //     editor.ui.getEditableElement()
        // );
        // Array.from(editor.ui.componentFactory.names()).forEach((x) =>
        //   console.log(x)
        // );
        // editorObj = editor;
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        // console.log({ event, editor, data });
        // console.log(data)
        onBodyChange(data)
      }}
      onBlur={(event, editor) => {
        console.log("Blur.", editor);
      }}
      onFocus={(event, editor) => {
        console.log("Focus.", editor);
      }}
    />
  );
};

export default Editor;

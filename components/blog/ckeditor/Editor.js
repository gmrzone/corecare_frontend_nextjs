import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import EditorNew from 'ckeditor5-custom-build'



const Editor = () => {
  const configuration = {
    toolbar: {
        items: [
            "heading",
            "|",
            "bold",
            "italic",
            "fontColor",
            "selectAll",
            "link",
            "bulletedList",
            "numberedList",
            "blockQuote",
            "codeblock",
            "|",
            "uploadImage",
            "mediaEmbed",
            "|",
            "indent",
            "outdent",
            "|",
            "insertTable",
            "undo",
            "redo",
          ],
          shouldNotGroupWhenFull: true
    },
    codeBlock: {
        languages: [
                // Do not render the CSS class for the plain text code blocks.
                { language: 'plaintext', label: 'Plain text', class: '' },

                // Use the "php-code" class for PHP code blocks.
                { language: 'php', label: 'PHP', class: 'php-code' },

                // Use the "js" class for JavaScript code blocks.
                // Note that only the first ("js") class will determine the language of the block when loading data.
                { language: 'javascript', label: 'JavaScript', class: 'js javascript js-code' },

                // Python code blocks will have the default "language-python" CSS class.
                { language: 'python', label: 'Python' }
        ]
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
      data="<p>Hello from CKEditor 5!</p>"
      config={configuration}
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        console.log("Editor is ready to use!", editor);
        // Insert the toolbar before the editable area.
        //     editor.ui.getEditableElement().parentElement.insertBefore(
        //     editor.ui.view.toolbar.element,
        //     editor.ui.getEditableElement()
        // );
        Array.from(editor.ui.componentFactory.names()).forEach((x) =>
          console.log(x)
        );
        // editorObj = editor;
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
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

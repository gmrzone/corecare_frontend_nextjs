// import { useState, useEffect } from 'react';
// import {Editor, EditorState, RichUtils, Modifier} from 'draft-js';
// import Draft from 'draft-js'
// import 'draft-js/dist/Draft.css';
// import RichToolbox from './RichToolbox'
// import AlignContent from './blocks/HeadingWithAlignmant'
// import Immutable from 'immutable'
// import { styleMap } from './data'

// const RichTextEditor = () => {
//     const [editorState, setEditorState] = useState(EditorState.createEmpty())
//     const [alignment, setAlignment] = useState("left")

//     const onChange = state => setEditorState(state)

//     const onBoldClick = () => {
//         onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
//       }
    
//     const onItalicClick = () => {
//         onChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))
//     }
//     const onUnderLineClick = () => {
//         onChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'))
//     }
    
//     const _toggleColor = (toggledColor) => {
//         const selection = editorState.getSelection();

//         // Let's just allow one color at a time. Turn off all active colors.
//         const nextContentState = Object.keys(styleMap)
//           .reduce((contentState, color) => {
//             return Modifier.removeInlineStyle(contentState, selection, color)
//           }, editorState.getCurrentContent());

//         let nextEditorState = EditorState.push(
//           editorState,
//           nextContentState,
//           'change-inline-style'
//         );

//         const currentStyle = editorState.getCurrentInlineStyle();

//         // Unset style override for current color.
//         if (selection.isCollapsed()) {
//           nextEditorState = currentStyle.reduce((state, color) => {
//             return RichUtils.toggleInlineStyle(state, color);
//           }, nextEditorState);
//         }

//         // If the color is being toggled on, apply it.
//         if (!currentStyle.has(toggledColor)) {
//           nextEditorState = RichUtils.toggleInlineStyle(
//             nextEditorState,
//             toggledColor
//           );
//         }

//         onChange(nextEditorState);
//       }
//     const onBlockCHange = (code => {
//         onChange(RichUtils.toggleBlockType(editorState, code))
//     })
//     const blockRender = Immutable.Map({

//         "header-one": {
//             element: 'h1',
//             aliasedElements: 'div',
//             wrapper: <AlignContent align={alignment}/>
//         },
//         "header-two": {
//             element: 'h2',
//             aliasedElements: 'div',
//             wrapper: <AlignContent align={alignment}/>
//         },
//         "header-three": {
//             element: 'h3',
//             aliasedElements: 'div',
//             wrapper: <AlignContent align={alignment}/>
//         },
//         "header-four": {
//             element: 'h4',
//             aliasedElements: 'div',
//             wrapper: <AlignContent align={alignment}/>
//         },
//         "header-five": {
//             element: 'h5',
//             aliasedElements: 'div',
//             wrapper: <AlignContent align={alignment}/>
//         },
//         "header-six": {
//             element: 'h6',
//             aliasedElements: 'div',
//             wrapper: <AlignContent align={alignment}/>
//         },
//         "unstyled": {
//             element: 'section',
//             aliasedElements: 'div',
//             wrapper: <AlignContent align={alignment}/>
//         }
//       });
//     const extendedBlockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(blockRender);
//     console.log(alignment)
//     const myBlockStyleFn = (contentBlock) => {
//         const type = contentBlock.getType()
//         if (type === 'blockquote') {
//             return 'draft-blockquote';
//         }
//         if (type === 'code-block') {
//             return 'draft-codeblock'
//         }

//     }
//     const handleKeyCommand = (command, editorState) => {
//         const newState = RichUtils.handleKeyCommand(editorState, command);
//         if (newState) {
//           onChange(newState);
//           return 'handled';
//         }
    
//         return 'not-handled';
//       }
//     return (
//         <div className="editor-container">
//             <RichToolbox onBoldClick={onBoldClick} onItalicClick={onItalicClick} onUnderLineClick={onUnderLineClick} onBlockChange={onBlockCHange} toggleColor={_toggleColor} setAlignItem={setAlignment}/>
//             <div className="editor">
//                 <Editor blockStyleFn={myBlockStyleFn}  customStyleMap={styleMap} editorState={editorState} onChange={onChange} placeholder="Tell a Story" handleKeyCommand={handleKeyCommand} textAlignment={alignment}/>
//             </div>
//         </div>
//     )
// }

// export default RichTextEditor
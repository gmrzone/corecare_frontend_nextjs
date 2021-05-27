import { useState, useRef } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import Draft from 'draft-js'
import 'draft-js/dist/Draft.css';
import RichToolbox from './RichToolbox'
import AlignContent from './blocks/AlignContent'
import Immutable from 'immutable'
// class RichTextEditor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {editorState: EditorState.createEmpty()};
//     this.onChange = editorState => this.setState({editorState});
//   }

//   render() {
//     return (
//       <Editor editorState={this.state.editorState} onChange={this.onChange} placeholder="Tell a Story"/>
//     );
//   }
// }
    

const RichTextEditor = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const onChange = state => setEditorState(state)
        const styleMap = {
            'code-block': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
            fontSize: 16,
            padding: 4,
            },
            'BOLD': {
            color: '#000000',
            fontWeight: 'bold',
            }
        }


    const onBoldClick = () => {
        onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
      }
    
    const onItalicClick = () => {
        onChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))
    }
    const onUnderLineClick = () => {
        onChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'))
    }
    // const onCodeClick = () => {
    //     onChange(RichUtils.toggleBlockType(editorState, 'code-block'))
    // }
    const onBlockCHange = (code => {
        onChange(RichUtils.toggleBlockType(editorState, code))
    })
    const blockRender = Immutable.Map({
        'AlignCenter': {
          element: "section",
          wrapper: <AlignContent align="center"/>,
        },
        "AlignLeft": {
            element: "section",
            wrapper: <AlignContent align="flex-start"/>,
        },
        "AlignRight": {
            element: "section",
            wrapper: <AlignContent align="flex-end"/>,
        },
      });
    const extendedBlockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(blockRender);
    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
          onChange(newState);
          return 'handled';
        }
    
        return 'not-handled';
      }
    return (
        <div className="editor-container">
            <RichToolbox onBoldClick={onBoldClick} onItalicClick={onItalicClick} onUnderLineClick={onUnderLineClick} onBlockChange={onBlockCHange} />
            <div className="editor">
                <Editor  blockRenderMap={extendedBlockRenderMap} customStyleMap={styleMap} editorState={editorState} onChange={onChange} placeholder="Tell a Story" handleKeyCommand={handleKeyCommand} />
            </div>
        </div>
    )
}

export default RichTextEditor
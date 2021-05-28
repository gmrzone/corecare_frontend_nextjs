import { useState, useRef } from 'react';
import {Editor, EditorState, RichUtils, Modifier} from 'draft-js';
import Draft from 'draft-js'
import 'draft-js/dist/Draft.css';
import RichToolbox from './RichToolbox'
import AlignContent from './blocks/AlignContent'
import Immutable from 'immutable'
import { styleMap } from './data'

const RichTextEditor = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const onChange = state => setEditorState(state)

    const onBoldClick = () => {
        onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
      }
    
    const onItalicClick = () => {
        onChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))
    }
    const onUnderLineClick = () => {
        onChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'))
    }
    
    const _toggleColor = (toggledColor) => {
        const selection = editorState.getSelection();

        // Let's just allow one color at a time. Turn off all active colors.
        const nextContentState = Object.keys(styleMap)
          .reduce((contentState, color) => {
            return Modifier.removeInlineStyle(contentState, selection, color)
          }, editorState.getCurrentContent());

        let nextEditorState = EditorState.push(
          editorState,
          nextContentState,
          'change-inline-style'
        );

        const currentStyle = editorState.getCurrentInlineStyle();

        // Unset style override for current color.
        if (selection.isCollapsed()) {
          nextEditorState = currentStyle.reduce((state, color) => {
            return RichUtils.toggleInlineStyle(state, color);
          }, nextEditorState);
        }

        // If the color is being toggled on, apply it.
        if (!currentStyle.has(toggledColor)) {
          nextEditorState = RichUtils.toggleInlineStyle(
            nextEditorState,
            toggledColor
          );
        }

        onChange(nextEditorState);
      }
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
            <RichToolbox onBoldClick={onBoldClick} onItalicClick={onItalicClick} onUnderLineClick={onUnderLineClick} onBlockChange={onBlockCHange} toggleColor={_toggleColor}/>
            <div className="editor">
                <Editor  blockRenderMap={extendedBlockRenderMap} customStyleMap={styleMap} editorState={editorState} onChange={onChange} placeholder="Tell a Story" handleKeyCommand={handleKeyCommand} />
            </div>
        </div>
    )
}

export default RichTextEditor
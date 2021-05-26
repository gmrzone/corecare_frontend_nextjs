import ToolbarButton from './ToolbarButton'

var toolbarItems = [
    { label: 'Bold', style: 'BOLD' },
    { label: 'Italic', style: 'ITALIC' },
    { label: 'Underline', style: 'UNDERLINE' },
    { label: 'Code', style: 'CODE' },
    { label: 'Surprise', style: 'ANYCUSTOMSTYLE' },
  ]
  
  const RichTextTookbar = (props) => {
    var currentStyle = props.editorState.getCurrentInlineStyle()
    return (
      <div>
        {toolbarItems.map((toolbarItem) => (
          <ToolbarButton
            key={toolbarItem.label}
            active={currentStyle.has(toolbarItem.style)}
            label={toolbarItem.label}
            onToggle={props.onToggle}
            style={toolbarItem.style}
          />
        ))}
      </div>
    )
  }

export default RichTextTookbar
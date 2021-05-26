import style from '../../../styles/blog/createBlog.module.scss'
const RichToolbox = ({ onBoldClick , onItalicClick, onUnderLineClick }) => {
    const BLOCK_TYPES = [
        { label: " “ ” ", style: "blockquote" },
        { label: "UL", style: "unordered-list-item" },
        { label: "OL", style: "ordered-list-item" },
        { label: "{ }", style: "code-block" }
    ];

    return (
        <div className={style.editor_toolbox}>
            <span className={style.editor_bold + " " + style.toolbox_button} onClick={onBoldClick}>
                B
            </span>
            <span className={style.editor_italic + " " + style.toolbox_button} onClick={onItalicClick}>
                I
            </span>
            <span className={style.editor_underline + " " + style.toolbox_button} onClick={onUnderLineClick}>
                U
            </span>
        </div>
    )
}

export default RichToolbox
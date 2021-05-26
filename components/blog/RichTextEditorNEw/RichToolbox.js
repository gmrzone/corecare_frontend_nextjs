import style from '../../../styles/blog/createBlog.module.scss'
const RichToolbox = ({ onBoldClick , onItalicClick, onUnderLineClick, onCodeClick }) => {
    const BLOCK_TYPES = [
        { label: " “ ” ", style: "blockquote" },
        { label: "UL", style: "unordered-list-item" },
        { label: "OL", style: "ordered-list-item" },
        { label: "{ }", style: "code-block" }
    ];

    return (
        <div className={style.editor_toolbox}>
            <div className={style.editor_block + " " + style.editor_inline}>
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
            <div className={style.editor_block + " " + style.editor_inline}>
                <span className={style.toolbox_button + " " + style.editor_code} onClick={onCodeClick   }>
                {"{ }"}
                </span>
                <span className={style.toolbox_button + " " + style.editor_code} onClick={onCodeClick   }>
                    <i className={`fad fa-quote-left ${style.icon}`} />
                </span>
                <span className={style.toolbox_button + " " + style.editor_code} onClick={onCodeClick   }>
                    <i className={`fa fa-list-ol ${style.icon}`} aria-hidden="true" />
                </span>
                <span className={style.toolbox_button + " " + style.editor_code} onClick={onCodeClick   }>
                    <i className={`fa fa-list ${style.icon}`} aria-hidden="true" />
                </span>
            </div>
        </div>
    )
}

export default RichToolbox
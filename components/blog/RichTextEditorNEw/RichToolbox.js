import style from '../../../styles/blog/richToolbox.module.scss';
import HeadingDropDown from './HeadingDropdown'
import ColorDropdown from './ColorDropDown'
// import FontSizeDropDown from './FontSizeDropdown'
import { headingOptions, FontSizeData, alignIcons } from './data'
const RichToolbox = ({ onBoldClick , onItalicClick, onUnderLineClick, onCodeClick }) => {
    const BLOCK_TYPES = [
        { label: " “ ” ", style: "blockquote" },
        { label: "UL", style: "unordered-list-item" },
        { label: "OL", style: "ordered-list-item" },
        { label: "{ }", style: "code-block" }
    ];

    return (
        <div className={style.editor_toolbox}>
            <HeadingDropDown options={headingOptions} defaultSelected={headingOptions[0]} width="100px"/>
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
            <HeadingDropDown options={FontSizeData} defaultSelected={FontSizeData[2]} width="70px"/>
            {/* <FontSizeDropDown /> */}
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
            <ColorDropdown />
            <HeadingDropDown options={alignIcons} defaultSelected={alignIcons[0]} width="50px" height="auto"/>
            {/* <div className={style.editor_block + " " + style.editor_inline}>
                <span className={style.toolbox_button + " " + style.editor_code} onClick={onCodeClick   }>
                    <i className="fa fa-align-left" aria-hidden="true" />
                </span>
                <span className={style.toolbox_button + " " + style.editor_code} onClick={onCodeClick   }>
                    <i className="fa fa-align-center" aria-hidden="true" />
                </span>
                <span className={style.toolbox_button + " " + style.editor_code} onClick={onCodeClick   }>
                    <i className="fa fa-align-right" aria-hidden="true" />
                </span>
            </div> */}
        </div>
    )
}

export default RichToolbox
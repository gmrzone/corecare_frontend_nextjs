import style from '../../../styles/blog/richToolbox.module.scss';
import HeadingDropDown from './HeadingDropdown'
import ColorDropdown from './ColorDropDown'
// import FontSizeDropDown from './FontSizeDropdown'
import { headingOptions, FontSizeData, alignIcons } from './data';

const RichToolbox = ({ onBoldClick , onItalicClick, onUnderLineClick, onBlockChange, toggleColor }) => {
    const BLOCK_TYPES = [
        { id: "afzal", label: "{ }", style: "code-block" },
        { id: "afzal", label: <i className={`fad fa-quote-left ${style.icon}`} />, style: "blockquote" },
        { id: "afzal", label: <i className={`fa fa-list-ol ${style.icon}`} aria-hidden="true" />, style: "ordered-list-item" },
        { id: "afzal", label: <i className={`fa fa-list ${style.icon}`} aria-hidden="true" />, style: "unordered-list-item" }
    
    ];
    const renderBlocks = BLOCK_TYPES.map((x, i) => {
        return (
            <span className={style.toolbox_button + " " + style.editor_code} key={x.id + i} onClick={() => onBlockChange(x.style)}>
                {x.label}
            </span>
        )
    })

    return (
        <div className={style.editor_toolbox}>
            <HeadingDropDown options={headingOptions} defaultSelected={headingOptions[0]} width="100px" onBlockChange={onBlockChange} />
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
            <HeadingDropDown options={FontSizeData} defaultSelected={FontSizeData[2]} width="70px" fontBlock={true}/>
            {/* <FontSizeDropDown /> */}
            <div className={style.editor_block + " " + style.editor_inline}>
                {/* <span className={style.toolbox_button + " " + style.editor_code} onClick={() => onBlockChange('code-block')}>
                {"{ }"}
                </span>
                <span className={style.toolbox_button + " " + style.editor_code}>
                    <i className={`fad fa-quote-left ${style.icon}`} />
                </span>
                <span className={style.toolbox_button + " " + style.editor_code + " " + style.icon}>
                    <i className={`fa fa-list-ol ${style.icon}`} aria-hidden="true" />
                </span>
                <span className={style.toolbox_button + " " + style.editor_code}>
                    <i className={`fa fa-list ${style.icon}`} aria-hidden="true" />
                </span> */}
                {renderBlocks}
            </div>
            <ColorDropdown toggleColor={toggleColor}/>
            <HeadingDropDown options={alignIcons} defaultSelected={alignIcons[0]} width="50px" height="auto" onBlockChange={onBlockChange}/>
            <div className={style.editor_block + " " + style.editor_inline}>
                <span className={style.toolbox_button + " " + style.editor_code}>
                    <i className="fa fa-link" aria-hidden="true" />
                </span>
                <span className={style.toolbox_button + " " + style.editor_code}>
                    <i className="fad fa-image" />
                </span>
            </div>
        </div>
    )
}

export default RichToolbox
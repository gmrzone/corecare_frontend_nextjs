import style from '../../../styles/blog/richToolbox.module.scss';
import { useState, useEffect } from 'react';


const HeadingDropdown = ({ options, defaultSelected, width, height="120px" }) => {

    const [dropDownActive, setDropdownActive] = useState(false)

    useEffect(() => {
        const onBodyClick = () => {
            if (dropDownActive){
                setDropdownActive(false)
            }
        }
        document.body.addEventListener('click', onBodyClick)

        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [dropDownActive])

    const [selectedItem, setSelectedItem] = useState(defaultSelected)
    const renderOptions = options.filter(x => x.id !== selectedItem.id)
                          .map(x => {
                            return <span className={style[x.class_name] + " " + style.headings} key={x.id} onClick={() => setSelectedItem(x)}>{x.name}</span>
                          })
    const toggleDropDown = (e) => {
            // e.stopPropagation()        
        setDropdownActive(state => !state)
    }
    return (
        <div className={style.editor_block + " " + style.editor_headings + " dd_boxx"} onClick={toggleDropDown}>
            <div className={style.selected}>
                <span className={style.selected_heading}>{selectedItem.name}</span>
                <i className={`fa fa-caret-down ${style.dropdown_icon}`} aria-hidden="true" />
            </div>
            <div className={style.options + " dropdown_opt"}>
                {renderOptions  }
            </div>
            <style jsx>{`
                .dropdown_opt {
                    display: ${dropDownActive ? "block" : "none"};
                    width: ${width};
                    height: ${height};
                    
                }
                .dd_boxx {
                    width: ${width}
                }
            `}</style>
        </div>
    )
}

export default HeadingDropdown
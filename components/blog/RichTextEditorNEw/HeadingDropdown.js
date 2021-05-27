import style from '../../../styles/blog/richToolbox.module.scss';
import { useState, useEffect } from 'react';


const HeadingDropdown = () => {
    const options = [
        {   
            id: 1,
            name: "Normal",
            block_name: 'unstyled',
            class_name: 'heading_normal'
        },
        {
            id: 2,
            name: "H1",
            block_name: 'heading-one',
            class_name: 'heading_h1',
        },
        {
            id: 3,
            name: "H2",
            block_name: 'heading-two',
            class_name: 'heading_h2',
        },
        {
            id: 4,
            name: "H3",
            block_name: 'heading-three',
            class_name: 'heading_h3',
        },
        {
            id: 5,
            name: "H4",
            block_name: 'heading-four',
            class_name: 'heading_h4',
        },
        {
            id: 6,
            name: "H5",
            block_name: 'heading-five',
            class_name: 'heading_h5',
        },
        {
            id: 7,
            name: "H6",
            block_name: 'heading-six',
            class_name: 'heading_h6',
        }
    ]
    const [dropDownActive, setDropdownActive] = useState(false)

    useEffect(() => {
        const onBodyClick = () => {
            if (dropDownActive){
                console.log("color_deactivate")
                setDropdownActive(false)
            }
        }
        document.body.addEventListener('click', onBodyClick)

        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [dropDownActive])

    const [selectedItem, setSelectedItem] = useState(options[0])
    const renderOptions = options.filter(x => x.id !== selectedItem.id)
                          .map(x => {
                            return <span className={style[x.class_name] + " " + style.headings} key={x.id} onClick={() => setSelectedItem(x)}>{x.name}</span>
                          })
    const toggleDropDown = (e) => {
            // e.stopPropagation()        
        setDropdownActive(state => !state)
    }
    return (
        <div className={style.editor_block + " " + style.editor_headings} onClick={toggleDropDown}>
            <div className={style.selected}>
                <span className={style.selected_heading}>{selectedItem.name}</span>
                <i className={`fa fa-caret-down ${style.dropdown_icon}`} aria-hidden="true" />
            </div>
            <div className={style.options + " dropdown_opt"}>
                {renderOptions  }
            </div>
            <style jsx>{`
                .dropdown_opt {
                    display: ${dropDownActive ? "block" : "none"}
                }
            `}</style>
        </div>
    )
}

export default HeadingDropdown
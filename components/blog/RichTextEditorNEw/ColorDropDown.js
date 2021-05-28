import style from '../../../styles/blog/richToolbox.module.scss';
import { useState, useEffect } from 'react'
import { doc } from 'prettier';
const ColorDropdown = ({ toggleColor }) => {
    const [dropDownActive, setDropDownActive] = useState(false)
    useEffect(() => {
        const onBodyClick = () => {
            if (dropDownActive){
                console.log("Heading_deactivate")
                setDropDownActive(false)
            }
            
        }
        document.body.addEventListener('click', onBodyClick)

        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [dropDownActive  ])

    const options = [
        {
            id: 9,
            name: "black",
            block_name: 'BLACK',
            class_name: 'color_black',
        },
        {   
            id: 1,
            name: "crimson",
            block_name: 'CRIMSON',
            class_name: 'color_crimson'
        },
        {
            id: 2,
            name: "cadetblue",
            block_name: 'CADETBLUE',
            class_name: 'color_cadetblue',
        },
        {
            id: 3,
            name: "blue",
            block_name: 'BLUE',
            class_name: 'color_blue',
        },
        {
            id: 4,
            name: "grey",
            block_name: 'GREY',
            class_name: 'color_grey',
        },
        {
            id: 5,
            name: "green",
            block_name: 'GREEN',
            class_name: 'color_green',
        },
        {
            id: 6,
            name: "orchid",
            block_name: 'ORCHID',
            class_name: 'color_orchid',
        },
        {
            id: 7,
            name: "pink",
            block_name: 'PINK',
            class_name: 'color_pink',
        },
        {
            id: 8,
            name: "brown",
            block_name: 'BROWN',
            class_name: 'color_brown',
        },
        {
            id: 10,
            name: "navy",
            block_name: 'NAVY',
            class_name: 'color_navy',
        },
        {
            id: 11,
            name: "purple",
            block_name: 'PURPLE',
            class_name: 'color_purple',
        },
        {
            id: 12,
            name: "darkturquoise",
            block_name: 'DARKTURQUOISE',
            class_name: 'color_darkturquoise',
        }

        
    ]
    const colorClick = (color) => {
        toggleColor(color.block_name)  
    }
    const renderColors = options.map(x => {
        return <span className={style.color_item} key={x.id} style={{background: x.name}} onClick={() => colorClick(x)}></span>
    })
    const toggleDropDown = (e) => {
        // e.stopPropagation()
        setDropDownActive(state => !state)
    }
    return (
        <div className={style.editor_block + " " + style.editor_colors} onClick={toggleDropDown}>
            <div className={style.selected}>
                <span className={style.selected_color}></span>
                <i className={`fa fa-caret-down ${style.dropdown_icon}`} aria-hidden="true" />
            </div>
            <div className={style.options + " dropdown_opt"}>
                {renderColors}
            </div>
            <style jsx>{`
                .dropdown_opt {
                    display: ${dropDownActive ? "flex" : "none"}
                }
            `}</style>
        </div>
    )
}

export default ColorDropdown
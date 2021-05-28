// import style from '../../../styles/blog/richToolbox.module.scss';
// import { useState, useEffect } from 'react';


// const FontSizeDropdown = () => {
//     const [dropDownActive, setDropdownActive] = useState(false)

//     useEffect(() => {
//         const onBodyClick = () => {
//             if (dropDownActive){
//                 console.log("color_deactivate")
//                 setDropdownActive(false)
//             }
//         }
//         document.body.addEventListener('click', onBodyClick)

//         return () => {
//             document.body.removeEventListener('click', onBodyClick)
//         }
//     }, [dropDownActive])

//     const [selectedItem, setSelectedItem] = useState(12)

//     const renderFontSizes = () => {
//         const sizes = []
//         for (let i=8; i <= 72;i+= 2){
//             sizes.push(i)
//         }
//         return sizes
//     }
//     const toggleDropDown = (e) => {
//             // e.stopPropagation()        
//         setDropdownActive(state => !state)
//     }
//     return (
//         <div className={style.editor_block + " " + style.editor_headings + " " + style.editor_fontsize} onClick={toggleDropDown}>
//             <div className={style.selected}>
//                 <span className={style.selected_heading}>{selectedItem}</span>
//                 <i className={`fa fa-caret-down ${style.dropdown_icon}`} aria-hidden="true" />
//             </div>
//             <div className={style.options + " dropdown_opt"}>
//                 {renderFontSizes().map(x => <span className={style.headings} key={x} onClick={() => setSelectedItem(x)}>{x}</span>)}
//             </div>
//             <style jsx>{`
//                 .dropdown_opt {
//                     display: ${dropDownActive ? "block" : "none"}
//                 }
//             `}</style>
//         </div>
//     )
// }

// export default FontSizeDropdown
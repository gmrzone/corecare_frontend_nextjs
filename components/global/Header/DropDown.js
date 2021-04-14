import { useState, useEffect } from 'react'

const Dropdown = ({ input, selected, options, selectionChange })=> {
    const [open, setOpen] = useState(false)
    let renderedOpt = options.map((x, i) => {
        return selected.value !== x.value ? <div className="item" key={i} value={x.value} onClick={() => selectionChange(x)}>{x.name}</div> : ""
    })
    const toggleDropDown = (e) => {
        e.stopPropagation()
        setOpen(!open)
    }
    useEffect(() => {
        const CloseDropDown = () => {
            setOpen(false)
        }
        document.body.addEventListener('click', CloseDropDown)

        return () => {
            document.body.removeEventListener('click', CloseDropDown)
        }
    }, [open])
    return(
        <div className={`ui selection dropdown ${open ? "visible active" : ""}`} onClick={toggleDropDown} onChange={() => console.log("Afzal")}>
            <i className="dropdown icon"></i>
            <div className="default Text">{selected.name}</div>
            <div className={`menu ${open ? "visible transition" : ""}`} onChange={() => console.log("Changed")} name="city">
                {renderedOpt}
            </div>
        </div>
    )
}

export default Dropdown
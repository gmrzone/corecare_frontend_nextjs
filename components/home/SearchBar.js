import { useRef } from 'react'
const Searchbar = (props)=> {
    const screenWidth = useRef(window.innerWidth)
    const searchheight = screenWidth.current > 1000 ? "massive" : screenWidth.current > 700 ? "huge" : "big"
    return(
        <div className="search-bar">
            <div className={`ui icon input fluid ${searchheight}`}>
                <input type="text" name="search" placeholder="Search Services" {...props.input}/>
                <i className="search icon"></i>
            </div>
        </div>
    )
}

export default Searchbar



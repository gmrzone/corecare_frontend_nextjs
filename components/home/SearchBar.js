import { useEffect, useRef } from 'react'
import style from '../../styles/home/MainImage.module.scss';
const Searchbar = ({  register, handleChange })=> {


    return(
        // <div className={style.search_bar}>
        //     <div className={`ui icon input fluid huge`}>
        //         <input type="text" placeholder="Search Services" />
        //         <i className="search icon"></i>
        //     </div>
        // </div>
        <div className={style.search_bar}>
            <div className={style.search_input}>
                <i className="fa fa-search" aria-hidden="true" />
                <input type="text" placeholder="Search for a service"  {...register("search")} onChange={handleChange}/>
            </div>
        </div>
    )
}

export default Searchbar



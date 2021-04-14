import style from '../../styles/home/MainImage.module.scss';
import SearchBar from './SearchBar'
import Dropdown from './DropDown'
import { useState, useRef, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Link from 'next/link'
const selectOpt = [
    {
        name: 'Mumbai',
        value: 'mumbai'
    },
    {
        name: 'Pune',
        value: 'pune'
    }
]
const MainSearch = ({ SearchService, searchResult, ClearSearch }) => {
    const [dropDownSelected, setDropdownSelected] = useState(null)
    const { handleSubmit, register, errors } = useForm()
    const previousValue = useRef()
    const timeout_id = useRef()
    const onSubmit = (formValue) => {
        formValue.city = dropDownSelected?.value
        // SearchService(formValue)
        console.log(formValue)
    }

    const debounceSearch = (value) => {

        console.log(value)
    }
    const handleChange = (e) => {
        const value = e.target.value
        if (value !== previousValue.current && value){
            clearTimeout(timeout_id.current)
            timeout_id.current = setTimeout(() => debounceSearch(value), 300)
        }
    }

    // const renderSearchResult = searchResult.map(x => {
    //     return (
    //         <Link  href={`services/${x.service_specialist.slug}/${x.slug}/`} key={x.id}>
    //             <a className={style.search-item}>
    //                 {x.name}
    //             </a>
    //         </Link>
    //     )
    // })
    return(
        <>
            <form className={style.search_container} onSubmit={handleSubmit(onSubmit)}>
                <Dropdown register={register} selected={dropDownSelected} selectionChange={setDropdownSelected} options={selectOpt}/> 
                <SearchBar register={register} handleChange={handleChange}/> 
            </form>
            {/* {searchResult.length > 0 || formProps.values['query'] ?(
                <div className={`ui container ${style.serach-result}`}>
                    {renderSearchResult.length > 0 ? renderSearchResult : (
                        <div className={style.search-item}>
                            Nothing Found
                        </div>
                    )}
                </div>
            ): ""} */}
        </>
    )
}
// const mapStateToProps = (state) => {
//     return {
//         searchResult: state.searchResult
//     }
// }
// export default connect(mapStateToProps, { SearchService, ClearSearch })(MainSearch)
export default MainSearch
import style from '../../styles/home/MainImage.module.scss';
import SearchBar from './SearchBar'
import Dropdown from './DropDown'
import { useState, useRef, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Link from 'next/link'
import axios from '../../data/backendApi'
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
const MainSearch = ({ ClearSearch, mobileNav }) => {
    const [dropDownSelected, setDropdownSelected] = useState(null)
    const { handleSubmit, register, errors } = useForm()
    const [searchResult, setSearchResult] = useState(null)
    const previousValue = useRef()
    const timeout_id = useRef()


    const search = (query, city) => {
        axios.get(`search/${query}/${city}/`)
        .then(response => {
            setSearchResult(response.data)
        })
    }
    const onSubmit = (formValue) => {
        formValue.city = dropDownSelected?.value
        // SearchService(formValue)
        console.log(formValue)
        search(formValue.search, dropDownSelected)
    }

    const debounceSearch = (value) => {

        console.log(value)

            search(value, dropDownSelected)


    }
    const handleChange = (e) => {
        const value = e.target.value
        if (value && value !== previousValue.current){
            clearTimeout(timeout_id.current)
            timeout_id.current = setTimeout(() => debounceSearch(value), 300)
        }
        else if (!value) {
            console.log("empty")
            clearTimeout(timeout_id.current)
            setSearchResult(null)
        }
    }

    const renderSearchResult = searchResult?.map(x => {
        return (
            <Link  href={`services/${x.service_specialist.slug}/${x.slug}/`} key={x.id}>
                <a className={style.search_item}>
                    {x.name}
                </a>
            </Link>
        )
    })
    return(
        <>
            <form className={style.search_container} onSubmit={handleSubmit(onSubmit)}>
                <Dropdown register={register} selected={dropDownSelected} selectionChange={setDropdownSelected} options={selectOpt}/> 
                <SearchBar register={register} handleChange={handleChange}/> 
            </form>
            {searchResult ?(
                <div className={`${mobileNav && "ui container"} ${style.search_result}`}>
                    {searchResult.length > 0 ? renderSearchResult : (
                        <div className={style.search_item}>
                            Nothing Found
                        </div>
                    )}
                </div>
            ): ""}
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
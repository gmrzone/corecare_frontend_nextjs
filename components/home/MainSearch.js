import SearchBar from './SearchBar'
import Dropdown from './DropDown'
import { Form, Field } from 'react-final-form'
import { useState, useRef } from 'react'
import { SearchService, ClearSearch } from '../../actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
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
    const [dropDownSelected, setDropdownSelected] = useState(selectOpt[0])
    const timeOutId = useRef(null)
    const previousQuery = useRef("")
    const onSubmit = (formValue) => {
        formValue.city = dropDownSelected.value
        SearchService(formValue)
    }

    const debounceSearch = (formValue) => {
        if (previousQuery.current !== formValue.query){
            if (formValue.query){
                previousQuery.current = formValue.query
                SearchService(formValue)
            }
            else{
                ClearSearch()
            }
        }
        
    }
    const validate = (formValue) => {
            if (timeOutId.current){
                clearTimeout(timeOutId.current)
            }
            timeOutId.current = setTimeout(() => debounceSearch(formValue), 300)
        return {}
    }
    const renderSearchResult = searchResult.map(x => {
        return (
            <Link className="search-item" to={`services/${x.service_specialist.slug}/${x.slug}/`} key={x.id}>
                {x.name}
            </Link>
        )
    })
    return(
        <Form validate={validate} onSubmit={onSubmit}>
                {(formProps) => (
                    <>
                    <form className="search-container" onSubmit={formProps.handleSubmit} style={{position: 'relative'}}>
                    <Field name="city" options={selectOpt}>
                        {({ input, meta, options }) => (
                            
                            <Dropdown input={input} options={options} meta={meta} onChange={(value) => input.onChange(value)} selected={dropDownSelected} selectionChange={setDropdownSelected}/> 
                        )}
                    </Field>
                    <Field name="query">
                        {({input}) => (
                            <SearchBar input={input}/> 
                        )}
                    </Field>     
                    {}
                    </form>
                    {searchResult.length > 0 || formProps.values['query'] ?(
                        <div className="ui container search-result">
                            {renderSearchResult.length > 0 ? renderSearchResult : (
                                <div className="search-item">
                                    Nothing Found
                                </div>
                            )}
                        </div>
                    ): ""}
                    </>
                )}
        </Form>

    )
}
const mapStateToProps = (state) => {
    return {
        searchResult: state.searchResult
    }
}
export default connect(mapStateToProps, { SearchService, ClearSearch })(MainSearch)
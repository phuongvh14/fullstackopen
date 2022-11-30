import React from 'react'

const Search = ({onCountryChange}) => {
    return (
        <div>
            find countries: 
            <input onChange={onCountryChange} />
        </div>
    )
}

export default Search;
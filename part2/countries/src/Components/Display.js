import React from 'react'
import CountryInfo from './CountryInfo';



const Display = ({allCountries, searchCountry, onCountryChange}) => {
    let displayElement = ""

    if (searchCountry.length > 0) {
        if (allCountries.length === 1) {
            displayElement = <CountryInfo country={allCountries[0]} />
        }
        else if (allCountries.length > 10) {
            displayElement = "Too many matches, specify another filter"
        }
        else if (allCountries.length <= 10) {
            displayElement = allCountries.map((country) => {
                return (
                    <div key={country.name.official}>
                        <p>{country.name.common}</p>
                        <button value={country.name.common} onClick={onCountryChange}>show</button>
                    </div>
                )
            })
        }
    }

    return (
        <div>{displayElement}</div>
    )
}

export default Display;
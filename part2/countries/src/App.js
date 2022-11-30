import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './Components/Search'
import Display from './Components/Display'

const App = () => {
  const [searchCountry, setSearchCountry] = useState('')
  const [allCountries, setAllCountries] = useState([])

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => setAllCountries(response.data))

  }, [])

  const onCountryChange = (event) => setSearchCountry(event.target.value) 

  const countriesToDisplay = searchCountry.length === 0 ? allCountries : allCountries.filter(country => new RegExp(searchCountry, "i").test(country.name.common))


  return (
    <div>
      <Search onCountryChange={onCountryChange} />
      <Display allCountries={countriesToDisplay} searchCountry={searchCountry} onCountryChange={onCountryChange} />
    </div>
  );
}

export default App;

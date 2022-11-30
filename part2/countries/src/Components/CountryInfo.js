import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryInfo = ({country}) => {

    const [weather, setWeather] = useState(null)

    let capitalLat = country.capitalInfo["latlng"][0]
    let capitalLng = country.capitalInfo["latlng"][1]
    const api_key = "bd62c54ac760f72468ab0e982561721e"
    
    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${capitalLat}&lon=${capitalLng}&units=metric&appid=${api_key}`)
            .then(response => setWeather(response.data))
    }, [capitalLat, capitalLng])

    if (weather !== null) {
        let img_url = `http://openweathermap.org/img/wn/${weather["weather"][0]["icon"]}@2x.png`
        return (
            <div>
                <h1>{country.name.common}</h1> 
                <p>capital {country.capital}</p>
                <p>area {country.area}</p>
                <h3>languages</h3>
                <ul>
                    {(Object.keys(country.languages)).map((lang) => <li key={lang}>{country.languages[lang]}</li>)}
                </ul>
                <img src={country.flags["png"]} alt="" />
                <h2>Weather in {country.capital}</h2>
                <p>Temperature {weather["main"]["temp"]} Celcius</p>
                <img src={img_url} alt='' />
                <p>Wind {weather["wind"]["speed"]} m/s</p>
            </div>
        )
    } else {
        return (
            <div>
                <h1>{country.name.common}</h1> 
                <p>capital {country.capital}</p>
                <p>area {country.area}</p>
                <h3>languages</h3>
                <ul>
                    {(Object.keys(country.languages)).map((lang) => <li key={lang}>{country.languages[lang]}</li>)}
                </ul>
                <img src={country.flags["png"]} alt="" />
                <h2>Loeading weather in {country.capital} ... </h2>
            </div>
        )
    }
}

export default CountryInfo;

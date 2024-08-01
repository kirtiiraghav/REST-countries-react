import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'

export default function CountriesList() {
    const [countriesData, setCountriesData] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then((data) => {
                setCountriesData(data)
            })
    }, [])

    return (
        <div className='flex justify-evenly flex-wrap gap-x-10 gap-y-16'>{
            countriesData.map((country, idx) => {
                return <CountryCard
                    key={idx}
                    flag={country.flags.svg}
                    name={country.name.common}
                    population={country.population.toLocaleString('en-IN')}
                    region={country.region}
                    capital={country.capital ? country.capital?.join(', ') : 'N/A'} />
            })
        }
        </div>
    )
}

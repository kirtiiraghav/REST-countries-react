import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'

export default function CountriesList({ query }) {
    const [countriesData, setCountriesData] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then((data) => {
                setCountriesData(data)
            })
    }, [])

    return (
        <div className='flex justify-evenly flex-wrap gap-10 md:gap-x-10 md:gap-y-16'>{
            countriesData.filter((country) => {
                return country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
            }).map((country, idx) => {
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

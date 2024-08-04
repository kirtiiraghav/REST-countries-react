import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function CountryDetails() {
    const [countryData, setCountryData] = useState({})
    const { country: countryName } = useParams()
    const { state } = useLocation()

    function updateCountryData(data) {
        setCountryData({
            flag: data.flags.svg,
            name: data.name.common,
            nativeName: data.name.nativeName ? Object.values(data.name.nativeName)[0]?.common : data.name.common,
            population: data.population.toLocaleString('en-IN'),
            region: data.region,
            subregion: data.subregion,
            capital: data.capital?.join(', '),
            tld: data.tld?.join(', '),
            currencies: Object.values(data.currencies || {})[0]?.name,
            languages: Object.values(data.languages || {})?.join(', ')
        })
    }

    useEffect(() => {
        if (state) {
            updateCountryData(state);
            return
        }

        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
            .then(res => res.json())
            .then(([data]) => {
                updateCountryData(data)
            })
    }, [countryName])

    return (
        <main className='max-w-7xl mx-auto pt-8 font-nunito px-6 sm:px-12'>
            <a onClick={() => history.back()} className='bg-elements-color dark:bg-elements-color shadow cursor-pointer px-4 py-2 rounded'>
                <i className="fa-solid fa-arrow-left-long"></i>
                <span className='ml-2 font-semibold'>Back</span>
            </a>
            <section className='flex items-center gap-6 pt-16'>
                <div className='w-[500px]'>
                    <img className='w-[90%] border-solid border-[1px] border-image-border dark:border-image-border' src={countryData.flag} alt="" />
                </div>
                <div className=''>
                    <h2 className='text-2xl font-bold'>{countryData.name}</h2>
                    <div className='flex gap-x-6 my-6'>
                        <div>
                            <p><b>Native Name: </b>{countryData.nativeName}</p>
                            <p><b>Population: </b>{countryData.population} </p>
                            <p><b>Region: </b>{countryData.region} </p>
                            <p><b>Sub Region: </b>{countryData.subregion}</p>
                            <p><b>Capital: </b>{countryData.capital}</p>
                        </div>
                        <div>
                            <p><b>Top Level Domain: </b>{countryData.tld}</p>
                            <p><b>Currencies: </b>{countryData.currencies}</p>
                            <p><b>Languages: </b>{countryData.languages}</p>
                        </div>
                    </div>
                    <div>
                        <p><b>Border Countries: </b></p>
                    </div>
                </div>
            </section>
        </main>
    )
}

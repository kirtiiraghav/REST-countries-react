import React from 'react'

export default function RegionFilterSelect({setQuery}) {
    return (
        <select onChange={(e)=>{
            setQuery(e.target.value.toLowerCase());
        }} className='bg-elements-color dark:bg-elements-color shadow outline-none px-5 max-w-48 mt-8 py-3 md:mt-0 rounded' name="" id="">
            <option hidden>Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    )
}

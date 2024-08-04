import React from 'react'
import { Link } from "react-router-dom";

export default function CountryCard({ flag, name, population, region, capital, data }) {
    return (
        <Link className=' bg-elements-color dark:bg-elements-color max-w-[250px] w-full shadow hover:scale-110 hover:shadow-lg transition-all ease-in-out duration-300 rounded-lg overflow-hidden' to={`/${name}`} state={data} >
            <div className='h-32'>
                <img className='object-cover w-full h-full border-[#ddd] dark:border-image-border border-[1px] border-solid ' src={flag} alt={name + " flag"} />
            </div>
            <div className='p-4'>
                <h3 className='text-2xl font-bold mb-2'>{name}</h3>
                <p className='font-medium'><b>Population: </b>{population}</p>
                <p className='font-medium'><b>Region: </b>{region}</p>
                <p className='font-medium'><b>Capital: </b>{capital}</p>
            </div>
        </Link >
    )
}

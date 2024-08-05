import React from 'react'

export default function CountriesListShimmer() {
    return (
        <section className='flex justify-evenly flex-wrap gap-10 md:gap-x-10 md:gap-y-16'>
            {Array.from({ length: 24 }).map((el, idx) => {
                return (
                    <div key={idx} className='shadow bg-elements-color dark:bg-elements-color w-[250px] h-[272px] rounded-lg overflow-hidden'>
                        <div className='bg-shimmer-color dark:bg-shimmer-color h-32'></div>
                        <div className='p-4'>
                            <div className='bg-shimmer-color dark:bg-shimmer-color h-7 mb-2'></div>
                            <div className='bg-shimmer-color dark:bg-shimmer-color h-4 mb-2'></div>
                            <div className='bg-shimmer-color dark:bg-shimmer-color h-4 mb-2'></div>
                            <div className='bg-shimmer-color dark:bg-shimmer-color h-4 mb-2'></div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

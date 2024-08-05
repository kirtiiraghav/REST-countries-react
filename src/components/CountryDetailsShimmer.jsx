import React from 'react'

export default function CountryDetailsShimmer() {
    return (
        <section className='flex items-start lg:items-center gap-8 py-16 flex-col lg:flex-row'>
            <div className=' max-w-md w-full h-52 bg-shimmer-color dark:bg-shimmer-color'>
                <div className='w-full border-solid border-[1px] border-image-border dark:border-image-border'></div>
            </div>
            <div className='w-full'>
                <div className='h-8 w-[60%] lg:w-full max-w-[full] bg-shimmer-color dark:bg-shimmer-color'></div>
                <div className='flex flex-col lg:flex-row gap-y-3 lg:gap-x-6 my-6'>
                    <div className=' w-[40%]'>
                        {
                            Array.from({ length: 5 }).map((el, idx) => {
                                return (<p className='w-full h-6 mb-2 bg-shimmer-color dark:bg-shimmer-color' key={idx}></p>)
                            })
                        }
                    </div>
                    <div className=' w-[40%]'>
                        {
                            Array.from({ length: 3 }).map((el, idx) => {
                                return (<p className='w-full h-6 mb-2 bg-shimmer-color dark:bg-shimmer-color' key={idx}></p>)
                            })
                        }
                    </div>
                </div>
                <div className='h-6 w-[60%] lg:w-full max-w-[full] bg-shimmer-color dark:bg-shimmer-color'></div>
            </div>
        </section>
    )
}

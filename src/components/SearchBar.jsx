export default function SearchBar({setQuery}) {
    return (
        <div className='shadow max-w-[40%]'>
            <i className="fa-solid fa-magnifying-glass pl-3"></i>
            <input onChange={(e) => {
                setQuery(e.target.value.toLowerCase());
            }} className='pl-3 py-3 outline-none w-[90%]' type="text" placeholder='Search for a country...' />
        </div>
    )
}

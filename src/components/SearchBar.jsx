export default function SearchBar({ setQuery }) {
    return (
        <div className=' bg-elements-color dark:bg-elements-color flex items-center shadow max-w-[400px] lg:max-w-[450px] w-full rounded overflow-hidden'>
            <i className="fa-solid fa-magnifying-glass pl-3 text-[#808080]"></i>
            <input spellCheck={false} onChange={(e) => {
                setQuery(e.target.value.toLowerCase());
            }} className='bg-inherit pl-3 py-3 outline-none flex-grow shrink-0' type="text" placeholder='Search for a country...' />
        </div>
    )
}

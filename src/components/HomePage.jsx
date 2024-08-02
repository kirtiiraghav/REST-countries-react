import { useState } from "react";
import CountriesList from "./CountriesList";
import SearchBar from "./SearchBar";
import RegionFilterSelect from "./RegionFilterSelect";

export default function HomePage() {
    const [query, setQuery] = useState('')
    return (
        <main className="font-nunito px-6 sm:px-12">
            <div className='max-w-7xl mx-auto'>
                <section className="flex flex-col md:flex-row justify-between my-10 md:my-16">
                    <SearchBar setQuery={setQuery} />
                    <RegionFilterSelect setQuery={setQuery} />
                </section>
                <section className="my-10 md:my-16">
                    <CountriesList query={query} />
                </section>
            </div>
        </main>
    )
}

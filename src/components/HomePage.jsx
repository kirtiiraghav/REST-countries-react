import { useState } from "react";
import CountriesList from "./CountriesList";
import SearchBar from "./SearchBar";

export default function HomePage() {
    const [query, setQuery] = useState('')
    return (
        <main className="font-nunito px-6 sm:px-12">
            <div className='max-w-7xl mx-auto'>
                <section className="my-16">
                    <SearchBar setQuery={setQuery} />
                </section>
                <section className="my-16">
                    <CountriesList query={query} />
                </section>
            </div>
        </main>
    )
}

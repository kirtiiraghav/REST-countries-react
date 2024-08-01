import CountriesList from "./CountriesList";

export default function HomePage() {
    return (
        <main className="font-nunito px-6 sm:px-12">
            <div className='max-w-7xl mx-auto'>
                <section className="my-16">
                    <CountriesList />
                </section>
            </div>
        </main>
    )
}

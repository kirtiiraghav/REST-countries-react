export default function Header() {
    return (
        <header className="shadow font-nunito px-6 sm:px-12">
            <div className="max-w-7xl mx-auto flex justify-between py-5">
                <a href=""><h2 className=" font-bold sm:font-extrabold text-xl sm:text-2xl md:text-3xl">Where in the world?</h2></a>
                <span className="flex items-center gap-2 cursor-pointer text-xs sm:text-base font-medium ">
                    <i className="fa-regular fa-moon"></i>
                    <p className="">Dark Mode</p>
                </span>
            </div>
        </header>
    )
}

export default function Header() {
    return (
        <header className="shadow font-nunito px-6">
            <div className="max-w-7xl mx-auto flex justify-between py-5">
                <a href=""><h2 className="font-extrabold text-2xl">Where in the world?</h2></a>
                <span className="flex items-center gap-2 cursor-pointer font-medium">
                    <i class="fa-regular fa-moon"></i>
                    <p>Dark Mode</p>
                </span>
            </div>
        </header>
    )
}

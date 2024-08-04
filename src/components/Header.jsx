import { useContext } from "react"
import { DarkModeContext } from "../contexts/DarkMode"
import { Link } from "react-router-dom";

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useContext(DarkModeContext)

    const handleToggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('isDarkMode', JSON.stringify(newMode));
    };

    return (
        <header className="shadow font-nunito px-6 sm:px-12 bg-elements-color dark:bg-elements-color">
            <div className="max-w-7xl mx-auto flex justify-between py-5">
                <Link to="/"><h2 className=" font-bold sm:font-extrabold text-xl sm:text-2xl md:text-3xl">Where in the world?</h2></Link>
                <span onClick={handleToggleDarkMode} className="flex items-center gap-2 cursor-pointer text-xs sm:text-base font-medium ">
                    <i className={`fa-regular fa-${isDarkMode ? 'sun' : 'moon'}`}></i>
                    <p className="">{isDarkMode ? 'Light' : 'Dark'} Mode</p>
                </span>
            </div>
        </header>
    )
}

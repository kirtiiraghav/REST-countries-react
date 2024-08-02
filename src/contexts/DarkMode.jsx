import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext()

export function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('isDarkMode')))

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark'); 
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (<DarkModeContext.Provider value={[isDarkMode, setIsDarkMode] }>
        {children}
    </DarkModeContext.Provider>
    )
}
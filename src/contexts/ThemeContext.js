import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    function getInitialDarkMode() {
        const storedDarkMode = localStorage.getItem("darkMode");
        if (!storedDarkMode) {
            const defaultDarkModeValue = false;
            localStorage.setItem(
                "darkMode",
                JSON.stringify(defaultDarkModeValue)
            );
            return defaultDarkModeValue;
        }
        return JSON.parse(storedDarkMode);
    }
    const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode());
    const toggleDarkMode = () => {
        console.log("ttest");
        setIsDarkMode((preMode) => {
            const newMode = !preMode;
            localStorage.setItem("darkMode", JSON.stringify(newMode));
            return newMode;
        });
    };

    useEffect(() => {
        const htmlElement = document.querySelector("html");
        if (isDarkMode) {
            htmlElement.classList.add("dark");
        } else {
            htmlElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{toggleDarkMode, isDarkMode}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};

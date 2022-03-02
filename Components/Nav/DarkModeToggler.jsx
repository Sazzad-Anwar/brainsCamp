import { useEffect, useState } from 'react';

const DarkModeToggler = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        if (typeof window !== undefined) {
            if ((localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
            ) {
                document.documentElement.classList.add('dark');
                setTheme('dark');
            } else {
                localStorage.setItem('theme', 'light');
                setTheme('light');
                document.documentElement.classList.remove('dark');
            }
        }
    }, [theme]);

    return (
        <span
            onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
                localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
            }}
            className="cursor-pointer text-purple-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 transition-all ease-in-out"
        >
            {theme === 'dark'
                ?
                <i className="bi bi-lightbulb active:animate-ping text-xl dark:text-secondary hover:text-secondary normal-transition peer"></i>
                :
                <i className="bi bi-lightbulb-fill active:animate-ping text-xl dark:text-secondary hover:text-secondary normal-transition"></i>
            }
        </span>
    );
};

export default DarkModeToggler;

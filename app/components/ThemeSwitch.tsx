// Custom Theme Switch package from npm-next-themes
"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from './Icons';

const ThemeSwitch = () => {
    const { setTheme, resolvedTheme } = useTheme(); // hook from "next-themes", resolvedTheme - resolve the theme problem
    const [mounted, setMounted] = useState(false); // state variable whether compoennt has been mounted

    useEffect(() => {
        setMounted(true);
    }, []); // ensure this effect runs only once after initial render

    if (!mounted) {
        return null;
    }

  return (
    <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
        {resolvedTheme === "dark" ? <SunIcon/> : <MoonIcon/>}
    </button>
    )   
}

export default ThemeSwitch
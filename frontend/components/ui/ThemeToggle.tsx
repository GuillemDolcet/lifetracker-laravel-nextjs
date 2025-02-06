// components/ThemeToggle.tsx
"use client";

import { useState, useEffect } from "react";
import {IconMoon, IconSun} from '@tabler/icons-react'

export default function ThemeToggle() {
    const [theme, setTheme] = useState<string>("light");

    // Obtener el tema inicial desde localStorage o el sistema
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.body.setAttribute("data-bs-theme", savedTheme);
    }, []);

    // Cambiar el tema
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.body.setAttribute("data-bs-theme", newTheme);
    };

    return (
        <div className={"cursor-pointer"} onClick={toggleTheme}>
            {theme === "light" ? <IconSun/> : <IconMoon/>}
        </div>
    );
}

import React, { useState, useEffect } from "react";

function DarkToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme === "dark";
    }
    const isDarkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return isDarkOS;
  });

  useEffect(() => {
    const rootElement = document.documentElement;
    if (isDarkMode) {
      rootElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      rootElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  function toggleDark() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <label className="inline-flex items-center me-5 cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={toggleDark}
        checked={isDarkMode}
      />
      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
      <div className="ms-1.5 dark:text-gray-300">
        {isDarkMode ? (
          <i className="fa-solid fa-sun"></i>
        ) : (
          <i className="fa-solid fa-moon"></i>
        )}
      </div>
    </label>
  );
}

export default DarkToggle;

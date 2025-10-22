import React from "react";
import DarkToggle from "./DarkToggle";

function Navbar() {
  return (
    <header className="fixed w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-2xl font-bold text-green-700 dark:text-green-400"
        >
          Breaking<span className="text-gray-900 dark:text-gray-100">Bad</span>
        </a>
        <nav className="hidden md:flex space-x-6 text-gray-600 dark:text-gray-300 text-md">
          {["Overview", "Walter", "Jesse", "Gus", "Saul"].map((name) => (
            <a
              key={name}
              href={`#${name.toLowerCase()}`}
              className="transition hover:text-green-700 dark:hover:text-green-400"
            >
              {name}
            </a>
          ))}
        </nav>
        <DarkToggle />
      </div>
    </header>
  );
}

export default Navbar;

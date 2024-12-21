import React, { useState } from 'react';

export function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`transition-all duration-1000 flex items-center justify-center h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-500 text-black'}`}>
      <button
        onClick={toggleDarkMode}
        className="transition-all duration-1000 m-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-56"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}
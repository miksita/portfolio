
'use client'
import React, { useState } from 'react';

const ToggleButton: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive); // Переключение состояния
  };

  return (
    <button
      onClick={toggle}
      className="relative w-20 h-10  bg-zinc-700  rounded-full p-1 transition-colors duration-300 hover:bg-gray-400 focus:outline-none"
    >
      {/* Внутренний кружок */}
      <div
        className={`absolute top-1 left-1 w-8 h-8 bg-gray-300 rounded-full shadow-md transform transition-transform duration-300  ${
          isActive ? 'translate-x-10' : 'translate-x-0'
        }`}
      ></div>
    </button>
  );
};

export default ToggleButton;
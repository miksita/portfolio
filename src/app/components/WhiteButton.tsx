import React from 'react';

interface WhiteButtonProps {
  onClick?: () => void; 
  className?: string; 
  children: React.ReactNode; 
}

const WhiteButton: React.FC<WhiteButtonProps> = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white text-gray-800 text-base font-medium px-6 rounded-2xl transition-colors hover:bg-pink-300 hover:text-white w-fit ${className}`}
    >
      {children}
    </button>
  );
};

export default WhiteButton;
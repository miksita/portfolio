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
      className={` border-gray-600 border-1 text-white text-base font-medium px-6  p-1 rounded-2xl transition-colors hover:bg-white hover:text-black w-fit ${className}`}
    >
      {children}
    </button>
  );
};

export default WhiteButton;
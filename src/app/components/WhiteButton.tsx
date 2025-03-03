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
      className={`bg-white text-black text-base font-medium px-6  p-1 rounded-2xl border-1 transition-colors hover:bg-black hover:border-gray-600 hover:text-white w-fit ${className}`}
    >
      {children}
    </button>
  );
};

export default WhiteButton;
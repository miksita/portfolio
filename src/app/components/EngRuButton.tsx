import { useState } from 'react';

interface Props {
  // toggle: () => void; // Функция для переключения языков
}

const LanguageSwitchButton = () => {
  const [isEng, setIsEng] = useState(false); // Состояние для переключения языков

  return (
    <button
      onClick={() => {
        // toggle(); // Вызываем функцию переключения языков
        setIsEng(prev => !prev); // Меняем локальное состояние кнопки
      }}
      className="relative w-33 h-10 bg-black border-gray-300 border-1 rounded-full p-1 transition-colors duration-300 "
    >
      {/* Внутренний кружок с текстом */}
      <div
        className={`absolute top-0 left-0 w-18 h-10 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-black ${
          isEng ? 'translate-x-15' : 'translate-x-0'
        }`}
      >
        <span className="text-base font-normal">{isEng ? 'ENG' : 'RU'}</span>
      </div>
    </button>
  );
};

export default LanguageSwitchButton;
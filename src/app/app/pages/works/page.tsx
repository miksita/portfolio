// import Image from 'next/image';

// export default function Works() {
//     return (
//       <div className="py-16">
//         <h1 className="">Works</h1>
//         <p className="mb-8 mt-4">I can give u a lot of servives, whih you wonna heheheheh</p>      
//         </div>
//     );
//   }
  

import React from 'react';
import WhiteButton from '@/app/components/WhiteButton';

// const Works: React.FC = () => {
//   return (
//     <div className="min-h-screen p-8">
//       <h1 className="text-3xl font-bold mb-8">Наши работы</h1>
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Первый отсек */}
//         <div className="flex-1 p-4 border-l border-gray-300">
//           <div className="h-48 bg-gray-200 mb-4"></div> {/* Прямоугольник для фото */}
//           <h2 className="text-xl font-semibold mb-2">Название работы 1</h2>
//           <p className="text-gray-600 mb-4">Краткое описание работы 1.</p>
//           <WhiteButton>details</WhiteButton>
//         </div>

//         {/* Второй отсек */}
//         <div className="flex-1 p-4 border-l border-gray-300">
//           <div className="h-48 bg-gray-200 mb-4"></div> {/* Прямоугольник для фото */}
//           <h2 className="text-xl font-semibold mb-2">Название работы 2</h2>
//           <p className="text-gray-600 mb-4">Краткое описание работы 2.</p>
//           <WhiteButton>details</WhiteButton>
//         </div>

//         {/* Третий отсек */}
//         <div className="flex-1 p-4 border-l border-gray-300">
//           <div className="h-48 bg-gray-200 mb-4"></div> {/* Прямоугольник для фото */}
//           <h2 className="text-xl font-semibold mb-2">Название работы 3</h2>
//           <p className="text-gray-600 mb-4">Краткое описание работы 3.</p>
//           <WhiteButton>details</WhiteButton>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Works;
// import React from 'react';
// import WhiteButton from './WhiteButton'; // Импортируем компонент кнопки

const WorksPage: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Наши работы</h1>
      <div className="flex flex-row gap-8 overflow-x-auto"> {/* Горизонтальное разделение */}
        {/* Первый отсек */}
        <div className="flex-none w-80 p-4 border-l border-gray-300"> {/* Фиксированная ширина */}
          <div className="h-48 bg-gray-200 mb-4"></div> {/* Прямоугольник для фото */}
          <h2 className="text-xl font-semibold mb-2">Название работы 1</h2>
          <p className="text-gray-600 mb-4">Краткое описание работы 1.</p>
          <WhiteButton>Посмотреть</WhiteButton>
        </div>

        {/* Второй отсек */}
        <div className="flex-none w-80 p-4 border-l border-gray-300"> {/* Фиксированная ширина */}
          <div className="h-48 bg-gray-200 mb-4"></div> {/* Прямоугольник для фото */}
          <h2 className="text-xl font-semibold mb-2">Название работы 2</h2>
          <p className="text-gray-600 mb-4">Краткое описание работы 2.</p>
          <WhiteButton>Посмотреть</WhiteButton>
        </div>

        {/* Третий отсек */}
        <div className="flex-none w-80 p-4 border-l border-gray-300"> {/* Фиксированная ширина */}
          <div className="h-48 bg-gray-200 mb-4"></div> {/* Прямоугольник для фото */}
          <h2 className="text-xl font-semibold mb-2">Название работы 3</h2>
          <p className="text-gray-600 mb-4">Краткое описание работы 3.</p>
          <WhiteButton>Посмотреть</WhiteButton>
        </div>
      </div>
    </div>
  );
};

export default WorksPage;
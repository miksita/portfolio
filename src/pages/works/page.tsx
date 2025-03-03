
import React from 'react';
import WhiteButton from '@/app/components/WhiteButton';
import Image from 'next/image';

const WorksPage: React.FC = () => {
  return (
    <div className="py-32 relative" id='works'>

      {/* Фоновое изображение у правого края сверху */}
      <div className="absolute top-0 right-0 z-0">
        <Image
          src="/gradient-works.png"
          alt="Фоновое изображение"
          width={1600} // Настройте размеры
          height={600}
          quality={100}
          className="object-cover" // Масштабирует изображение, чтобы оно заполнило контейнер
        />
      </div>

      {/* Контент */}
      <div className="relative z-10 container mx-auto">
        <h1 className="">Works</h1>
        <p className="mb-14 mt-4">I can give u a lot of servives, whih you wonna heheheheh</p>

        {/* Первый отсек */}
        <div className="flex flex-row items-center my-8 mt-20">
          {/* Серый прямоугольник */}
          <div className="w-96 h-48 bg-zinc-900 rounded-2xl mr-8"></div>
          {/* Текст и кнопка */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Made a lending</h2>
            <p className="mb-4 max-w-xl">I can give u a lot of servives, whih you wonna heheheheh mdbfjhsdbf nfdvjhs fhgsavfdbsadysdhgvsad bvsa</p>
            <WhiteButton className="w-fit">See</WhiteButton>
          </div>
        </div>
        <div className="mt-4 border-b border-gray-600 max-w-5xl"></div>

        {/* Второй отсек */}
        <div className="flex flex-row items-center my-8">
          {/* Серый прямоугольник */}
          <div className="w-96 h-48 bg-zinc-900 rounded-2xl mr-8"></div>
          {/* Текст и кнопка */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Made a lending</h2>
            <p className="mb-4 max-w-xl">I can give u a lot of servives, whih you wonna heheheheh mdbfjhsdbf nfdvjhs fhgsavfdbsadysdhgvsad bvsa</p>
            <WhiteButton className="w-fit">See</WhiteButton>
          </div>
        </div>
        <div className="mt-4 border-b border-gray-600 max-w-5xl"></div>

        {/* Третий отсек */}
        <div className="flex flex-row items-center my-8">
          {/* Серый прямоугольник */}
          <div className="w-96 h-48 bg-zinc-900 rounded-2xl mr-8"></div>
          {/* Текст и кнопка */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Made a lending</h2>
            <p className="mb-4 max-w-xl">I can give u a lot of servives, whih you wonna heheheheh mdbfjhsdbf nfdvjhs fhgsavfdbsadysdhgvsad bvsa</p>
            <WhiteButton className="w-fit">See</WhiteButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksPage;
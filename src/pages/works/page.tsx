
import React from 'react';
import WhiteButton from '@/app/components/WhiteButton';
import BottonBorder from '@/app/components/BottonBorder';

const WorksPage: React.FC = () => {
  return (
    <div className="py-32">
      <h1 className="">Works</h1>
      <p className="mb-8 mt-4">I can give u a lot of servives, whih you wonna heheheheh</p>

      {/* Первый отсек */}
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
      <BottonBorder />
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
      <BottonBorder />

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
  );
};

export default WorksPage;
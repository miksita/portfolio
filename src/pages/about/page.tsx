import Image from 'next/image';
import AboutInfo from '@/app/components/AboutInfo';
import { ABOUT_PAGE_TEXT } from '@/constants/text';

export default function About() {

  const t = ABOUT_PAGE_TEXT;

  return (
    <div>
      
      <div className="flex pb-32 pt-48">
        {/* Левая часть */}
        <div className="w-1/2 pr-14">
          <h1 className="mb-6">{t.title}</h1>
          <p className="mb-10 font-extralight">{t.description}</p>
          <AboutInfo />
        </div>

        {/* Правая часть с линией и текстом */}
        <div className="w-1/2 flex items-start pt-20">
          {/* Вертикальная линия с точками */}
          <div className="relative h-76 w-px bg-zinc-600">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full top-0"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full top-1/3"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full top-2/3"></div>
          </div>

          {/* Текст справа от линии */}
          <div className="ml-8">
            <p className="mb-8 font-extralight">{t.point_first}</p>
            <p className="mb-14 font-extralight">{t.point_second}</p>
            <p className="mb-6 font-extralight">{t.point_third}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
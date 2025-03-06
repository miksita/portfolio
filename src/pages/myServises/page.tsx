import React from 'react';
import WhiteButton from '@/app/components/WhiteButton';
import { SERVISES_PAGE_TEXT } from '@/constants/text';
import Link from 'next/link';

const MyServises: React.FC = () => {
const t = SERVISES_PAGE_TEXT;

  return (
    <div className="py-32">
      <h1>{t.title}</h1>
      <p className="mb-14 mt-4">{t.description}</p>
      <div className="flex">
        {/* Первый отсек */}
        <div className="flex-1 pt-4 pr-4 border-r border-gray-600">
          <h2 className="text-xl font-semibold mb-6 ">{t.servises.first.title}</h2>
          <p className="mb-8 max-w-2xs">{t.servises.first.description.short}</p>
          <Link href="/servises#servises-first"><WhiteButton>details</WhiteButton></Link>
        </div>

        {/* Второй отсек */}
        <div className="flex-1 p-4 pl-8 border-r border-gray-600">
          <h2 className="text-xl font-semibold mb-6">{t.servises.second.title}</h2>
          <p className="mb-8 max-w-2xs">{t.servises.second.description.short}</p>
          <Link href="/servises#servises-second"><WhiteButton>details</WhiteButton></Link>
        </div>

        {/* Третий отсек */}
        <div className="flex-1 p-4  pl-8">
          <h2 className="text-xl font-semibold mb-6">{t.servises.third.title}</h2>
          <p className="mb-8 max-w-2xs">{t.servises.third.description.short}</p>
          <Link href="/servises#servises-third"><WhiteButton>details</WhiteButton></Link>
        </div>
      </div>
    </div>
  );
};

export default MyServises;

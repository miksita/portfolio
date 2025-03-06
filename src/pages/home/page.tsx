'use client'
import React from 'react';
import Image from 'next/image';
import WhiteButton from '@/app/components/WhiteButton';
import WhiteBorderButton from '@/app/components/WhiteBorderButton';
import EngRuButton from '@/app/components/EngRuButton';
import { HOME_PAGE_TEXT } from "@/constants/text";

// import { useTranslation } from 'next-i18next';


export default function Home() {

    const t = HOME_PAGE_TEXT;

  // const { t } = useTranslation('common');
  
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Плавная прокрутка
    };
  }

  return (
    <div className="max-h-screen relative">
      <div className="absolute z-0 top-0 right-0">
        <Image
          src="/hero-gradient.png"
          alt="Фоновое изображение"
          width={1400} 
          height={400}
          quality={100}
          className="object-cover"
        />
      </div>
      
    
      <div className="pt-24 relative z-10">
        <h1 className="mb-6">{t.title_first}</h1>

        {/* <h1>{t('welcome')}</h1>
        <p>{t('description')}</p> */}

        <div className="flex space-x-10"> 
          <div className='pt-6 '>
            <EngRuButton />
          </div>
          <h1 className="mb-10 pl-16">{t.title_second}</h1>
        </div>
        <p className="mb-10 max-w-2xl">{t.description}</p>
        <div className="flex space-x-4"> 

          <a href="https://t.me/miksita" target="_blank" rel="noopener noreferrer">
            <WhiteButton>Here me</WhiteButton>
          </a>
          <WhiteBorderButton onClick={() => scrollToElement('works')}>My works</WhiteBorderButton>
        </div>
      </div>
    </div>
  );
}
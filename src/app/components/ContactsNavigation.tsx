'use client'
import React from 'react';
import { useRouter } from 'next/router';

const ContactsNavigation: React.FC = () => {
    const router = useRouter();

    const scrollToElement = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); // Плавная прокрутка
      }
    };
  
    const handleContactsClick = () => {
      if (router.pathname !== '/') {
        // Если текущая страница не главная, переходим на главную
        router.push('/').then(() => {
          // После перехода прокручиваем до раздела "Contacts"
          setTimeout(() => scrollToElement('contacts'), 100); // Небольшая задержка для загрузки страницы
        });
      } else {
        // Если уже на главной странице, просто прокручиваем
        scrollToElement('contacts');
      }
    };


  return (
    <button onClick={handleContactsClick} className="hover:text-pink-400">
    Contacts
  </button>
  );
}

export default ContactsNavigation;
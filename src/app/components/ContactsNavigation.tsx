'use client';

import { useRouter } from 'next/navigation';

interface ContactsNavigationProps {
  children: React.ReactNode;
}

const ContactsNavigation: React.FC<ContactsNavigationProps> = ({ children }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/'); // Переход на главную страницу
    setTimeout(() => {
      const element = document.getElementById('contacts');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Задержка для корректного скролла
  };

  return (
    <>
      <div onClick={handleButtonClick}>{children}</div>
    </>
  );
};

export default ContactsNavigation;
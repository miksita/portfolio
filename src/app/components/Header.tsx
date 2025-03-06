'use client'
import Link from 'next/link';
import { FaInstagram, FaGithub, FaTelegram } from 'react-icons/fa';
import BottonBorder from './BottonBorder';
import ContactsNavigation from './ContactsNavigation';
import { HEADER_TEXT } from '@/constants/text';

export default function Header() {
  const t = HEADER_TEXT;
     const scrollToElement = (id: string) => {
       const element = document.getElementById(id);
       if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
       }
     };

  return (
    <header className="py-6">
      <div className="container mx-auto flex justify-between">
        <nav>
          <ul className="flex space-x-10">
            <li><Link href="/">{t.home}</Link></li>
            <li><Link href="/servises">{t.servises}</Link></li>
            <li><Link href="/resume">{t.resume}</Link></li>
            <li><ContactsNavigation>{t.contacts}</ContactsNavigation></li>
          </ul>

        </nav>
        <nav className="flex items-center space-x-14">
          <Link
            href="https://www.instagram.com/mihcita/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram className="w-6 h-6" />
          </Link>
          <Link
            href="https://github.com/miksita"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaGithub className="w-6 h-6" />
          </Link>
          <Link
            href="https://t.me/miksita"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaTelegram className="w-6 h-6" />
          </Link>
        </nav>
      </div>
      <BottonBorder />
    </header>
  );
};

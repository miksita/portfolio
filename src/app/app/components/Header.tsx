import Link from 'next/link';
import { FaInstagram, FaGithub, FaTelegram } from 'react-icons/fa';
import BottonBorder from './BottonBorder';

const Header = () => {
  return (
    <header className="py-4 px-20">
      <div className="container mx-auto flex justify-between">
        <nav>
          <ul className="flex space-x-10">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/servises">Servises</Link></li>
            <li><Link href="/resume">Resume</Link></li>
            <li><Link href="/contacts">Contacts</Link></li>
          </ul>
        </nav>
        <nav className="flex items-center space-x-10">
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

export default Header;
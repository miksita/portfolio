import { FaGithub, FaTelegram } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import Link from 'next/link';
import { CONTACTS_PAGE_TEXT } from '@/constants/text';

export default function Contacts() {
  const t = CONTACTS_PAGE_TEXT;

  return (
    <div className="pt-32 pb-16" id="contacts"> {/* Добавлен padding снизу */}
      <h1 className="text-center">{t.title}</h1>
      <p className="mb-2 mt-4 text-center max-w-2xl mx-auto">{t.description}</p>
      <div className="flex items-center justify-center">
        <div className="rounded-lg w-full flex">
          {/* Левая часть: картинка */}
          <div className="flex-1 flex items-end justify-end relative overflow-hidden pr-4">
            <img
              src="/cat-gradient-contacts.png" // Замените на путь к вашей картинке
              alt="Изображение"
              className="w-100 h-100 object-cover rounded-lg"
            />
          </div>

          {/* Правая часть: список */}
          <div className="flex-1 pt-6 mt-24 border-l border-gray-600 h-55">
            <ul className="space-y-10 pl-10">
              <li>
                <Link
                  href="https://t.me/miksita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 flex items-center space-x-4"
                >
                  <FaTelegram className="w-8 h-8" />
                  <span>{t.social.telegram}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:nemiksita@gmail.com"
                  type='email'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 flex items-center space-x-4"
                >
                  <MdOutlineAlternateEmail className="w-8 h-8" />
                  <span>{t.social.email}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/miksita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 flex items-center space-x-4"
                >
                  <FaGithub className="w-8 h-8" />
                  <span>{t.social.github}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
import {FaGithub, FaTelegram} from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import Link from 'next/link';


export default function Contacts() {
  return (
    <div className="pt-32">
      <h1 className="text-center">Contacts</h1>
      <p className="mb-2 mt-4 text-center max-w-2xl mx-auto">
  he ehheheeh heheheh ehehehe he ehheheeh heheheh eheheheh vhe ehhe heheheh eheheheh he ehheheeh heheheh ehehehehh
</p>      <div className="flex items-center justify-center">
        <div className="rounded-lg shadow-lg w-full flex">
          {/* Левая часть: картинка */}
          <div className="flex-1 flex items-center justify-center relative overflow-hidden">
            <img
              src="/cat-gradient-contacts.png" // Замените на путь к вашей картинке
              alt="Изображение"
              className="w-100 h-100 object-cover rounded-lg"
            />
          </div>

          {/* Правая часть: список */}
          <div className="flex-1 pt-6 mt-24 border-l border-gray-600 h-55"> 

<ul className="space-y-10 pl-10 "> 
              <li>
                <Link
                  href="https://www.instagram.com/mihcita/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 flex items-center space-x-4"
                >
                  <FaTelegram className="w-8 h-8" />
                  <span>@miksita</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/mihcita/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 flex items-center space-x-4" 
                >
                  <MdOutlineAlternateEmail className="w-8 h-8" />
                  <span>nemiksita@gmail.com</span> 
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/mihcita/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 flex items-center space-x-4" 
                >
                  <FaGithub className="w-8 h-8" />
                  <span>miksita</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


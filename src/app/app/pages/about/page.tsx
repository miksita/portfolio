import Image from 'next/image';
import AboutInfo from '@/app/components/AboutInfo';

export default function About() {
  return (
    <div>
    <div className="flex py-16">
      {/* Левая часть */}
      <div className="w-1/2 pr-14">
        <h1 className="mb-6">About me</h1>
        <p className="mb-6 font-extralight">Hello! I am Miksita, a web developer and designer. I create beautiful and user-friendly websites.</p>
        <AboutInfo />
      </div>
      {/* Правая часть */}
      <div className="w-1/2 pt-16">
        <p className="mb-6 font-extralight">Hello! I am Miksita, a web developer and designer. I create beautiful and user-friendly websites.</p>
        <p className="mb-6 font-extralight">Hello! I am Miksita, a web developer and designer. I create beautiful and user-friendly websites.</p>
        <p className="mb-6 font-extralight">Hello! I am Miksita, a web developer and designer. I create beautiful and user-friendly websites.</p>
      </div>
    </div>
    </div>
  );
}

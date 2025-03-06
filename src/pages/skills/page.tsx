import React from 'react';
import SkillBar from '../../app/components/SkillsBar';
import Image from 'next/image';
import { SKILLS_PAGE_TEXT } from '@/constants/text';

const Skills: React.FC = () => {

const t = SKILLS_PAGE_TEXT;

  const skills = [
    { skill: 'React', percentage: 80 },
    { skill: 'Next', percentage: 87 },
    { skill: 'Tailwind', percentage: 40 },
    { skill: 'UX/UI', percentage: 94 },
  ];

  const svgIcons = [
    '/next-icon.svg',
    '/figma-icon.svg',
    '/tailwind-icon.svg',
    '/react-icon.svg',
  ];

  return (
    <div>
      <div className="w-full py-32">
        <h1 className="text-center">{t.title}</h1>
        <p className="mb-10 mt-4 text-center">{t.description}</p>

        <div className='flex'>
          <div className='flex-1/2'>
            {skills.map((item, index) => (
              <SkillBar key={index} skill={item.skill} percentage={item.percentage} />
            ))}
          </div>

          <div className='flex-1/3 items-center justify-center flex'>
            <div className='grid grid-cols-2 grid-rows-2 gap-4'>
              {svgIcons.map((icon, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-40 h-40 bg-black border-gray-600 border-1 rounded-2xl transition-shadow"
                >
                  <Image src={icon} alt={`Icon ${index + 1}`} width={150} height={150} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
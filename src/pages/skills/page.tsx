// import React from 'react';
// import SkillBar from '../../app/components/SkillsBar';

// const Skills: React.FC = () => {
//   const skills = [
//     { skill: 'React', percentage: 80 },
//     { skill: 'Next', percentage: 87 },
//     { skill: 'Tailwind', percentage: 50 },
//     { skill: 'UX/UI', percentage: 94 },
//   ];

//   const svgIcons = [
//     <svg key="1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//     </svg>,
//     <svg key="2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//     </svg>,
//     <svg key="3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//     </svg>,
//     <svg key="4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//     </svg>,
//   ];

//   return (
//     <div>
//       <div className="w-full py-16">
//         <h1 className="text-center">Skills</h1>
//         <p className="mb-8 mt-4 text-center">Hello! I am Miksita, a web developer and designer. I create beautiful and user-friendly websites.</p>

//         <div className='flex'>
//           <div className='flex-1/2'>
//             {skills.map((item, index) => (
//               <SkillBar key={index} skill={item.skill} percentage={item.percentage} />
//             ))}
//           </div>

//           <div className='flex-1/3 pl-14'>
//             <div className="grid grid-cols-2 gap-4 p-6">
//               {svgIcons.map((icon, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center justify-center p-6 bg-pink-400 rounded-lg shadow-sm transition-shadow"
//                 >
//                   {icon}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React from 'react';
import SkillBar from '../../app/components/SkillsBar';
import Image from 'next/image';

const Skills: React.FC = () => {
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
        <h1 className="text-center">Skills</h1>
        <p className="mb-10 mt-4 text-center">Hello! I am Miksita, a web developer and designer. I create beautiful and user-friendly websites.</p>

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

// import React from 'react';

// interface SkillBarProps {
//   skill: string;
//   percentage: number;
// }

// const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
//   return (
//     <div className="mb-14">
//       <div className="flex justify-between mb-1">
//         <span className="font-medium">{skill}</span>
//       </div>
//       <div className="h-2 relative bg-zinc-900">
//         <div
//           className="bg-pink-300 h-2 skill-bar-fill"
//           style={{ width: `${percentage}%`, '--percentage': `${percentage}%` } as React.CSSProperties}
//         ></div>
//         <span
//           className="absolute top-0 transform -translate-y-full"
//           style={{ left: `${percentage}%`, transform: 'translateX(-50%)' }}
//         >
//           {percentage}%
//         </span>
//       </div>
//     </div>
//   );
// };

// export default SkillBar;

'use client'

import React from 'react';
import { motion, useInView } from 'framer-motion';

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="mb-14" ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
      </div>
      <div className="h-2 relative bg-zinc-900">
        <motion.div
          className="bg-pink-300 h-2"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        ></motion.div>
        <motion.span
          className="absolute top-0 transform -translate-y-full"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          style={{ left: `${percentage}%`, transform: 'translateX(-50%)' }}
        >
          {percentage}%
        </motion.span>
      </div>
    </div>
  );
};

export default SkillBar;
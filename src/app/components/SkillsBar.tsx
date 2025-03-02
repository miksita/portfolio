import React from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
  return (
    <div className="mb-14">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
      </div>
      <div className="h-2 relative bg-zinc-900">
        <div
          className="bg-pink-300 h-2 "
          style={{ width: `${percentage}%` }}
        ></div>
        <span
          className="absolute top-0 transform -translate-y-full"
          style={{ left: `${percentage}%`, transform: 'translateX(-50%)' }}
        >
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default SkillBar;
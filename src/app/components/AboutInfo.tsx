import React from 'react';

// Расширенный тип для элементов списка
type InfoItem = {
  id: number;
  label: string; // Название поля (например, "Name", "Age", "Address")
  value: string; 
};

const infoData: InfoItem[] = [
  { id: 1, label: 'Name', value: 'Alisa Smirnova' },
  { id: 2, label: 'Age', value: '19' },
  { id: 3, label: 'Date of Birth', value: '25/12/2005' },
  { id: 4, label: 'Address', value: 'Vladivostok, Russia' },
];



const AboutInfo: React.FC = () => {
  return (
    <>
      <ul className="space-y-4">
        {infoData.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <div className="font-medium">{item.label}:</div>
            <p className="font-extralight">{item.value}</p>
          </div>
        ))}
      </ul>
    </>
  );
};

export default AboutInfo;
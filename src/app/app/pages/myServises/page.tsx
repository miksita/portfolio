import React from 'react';
import WhiteButton from '@/app/components/WhiteButton';

const MyServises: React.FC = () => {
  return (
    <div className="py-16">
      <h1>My Servises</h1>
      <p className="mb-10 mt-4">I can give u a lot of servives, whih you wonna heheheheh</p>
      <div className="flex">
        {/* Первый отсек */}
        <div className="flex-1 pt-4 pr-4 border-r border-gray-600">
          <h2 className="text-xl font-semibold mb-4">Business Card Website</h2>
          <p className="mb-4">A simple, stylish website to showcase your key info. Perfect for small businesses and freelancers.</p>
          <WhiteButton>details</WhiteButton>
        </div>

        {/* Второй отсек */}
        <div className="flex-1 p-4 pl-8 border-r border-gray-600">
          <h2 className="text-xl font-semibold mb-4">Custom Design</h2>
          <p className="mb-4">Unique, modern designs for logos, websites, and marketing materials. Tailored to your brand.</p>
          <WhiteButton>details</WhiteButton>
        </div>

        {/* Третий отсек */}
        <div className="flex-1 p-4  pl-8">
          <h2 className="text-xl font-semibold mb-4">Full Website </h2>
          <p className="mb-4">Responsive, SEO-optimized websites for any purpose. From concept to launch, we’ve got you covered.</p>
          <WhiteButton>details</WhiteButton>
        </div>
      </div>
    </div>
  );
};

export default MyServises;

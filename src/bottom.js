import React from 'react';
import image1 from './image 18.png';
import image2 from './image 19 (1).png';
import image3 from './image 20 (1).png';
import right from './Right.png';

const Bottom = () => {
  return (
    <div className="py-10 bg-white dark:bg-gray-800 text-black dark:text-white p-4">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div className="relative mb-8 sm:mb-0">
      <img src={image1} alt="Footer Image 1" className="w-full" />
      <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold text-custom-gray mb-2">Creating Streamlined Safeguarding Processes with OneRen</h3>
        <p className="text-sm text-[#4CAF50] flex items-center">
          Read more <img src={right} alt="Right Arrow" className="w-4 h-4 ml-2" />
        </p>
      </div>
    </div>
    <div className="relative mb-8 sm:mb-0">
      <img src={image2} alt="Footer Image 2" className="w-full" />
      <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold text-custom-gray mb-2">What are your safeguarding responsibilities and how can you manage them?</h3>
        <p className="text-sm text-[#4CAF50] flex items-center">
          Read more <img src={right} alt="Right Arrow" className="w-4 h-4 ml-2" />
        </p>
      </div>
    </div>
    <div className="relative">
      <img src={image3} alt="Footer Image 3" className="w-full" />
      <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold text-custom-gray mb-2">Revamping the Membership Model with Triathlon Australia</h3>
        <p className="text-sm text-[#4CAF50] flex items-center">
          Read more <img src={right} alt="Right Arrow" className="w-4 h-4 ml-2" />
        </p>
      </div>
    </div>
  </div>
</div>


  );
};

export default Bottom;

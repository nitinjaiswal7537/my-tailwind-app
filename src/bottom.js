import React from 'react';
import image1 from './image 18.png';
import image2 from './image 19 (1).png';
import image3 from './image 20 (1).png';
import right from './Right.png';

const Bottom = () => {
  return (
    <div className="text-white py-10">
      <div className="flex justify-center space-x-4">
        <div className="relative w-1/3">
          <img src={image1} alt="Footer Image 1" className="w-full" />
          <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2 flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg w-10/12">
              <h3 className="text-lg font-bold text-custom-gray">Creating Streamlined Safeguarding Processes with OneRen</h3>
              <p className="text-sm text-[#4CAF50] flex items-center">
                Readmore <img src={right} alt="Right Arrow" className="w-4 h-4 ml-2" />
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-1/3">
          <img src={image2} alt="Footer Image 2" className="w-full" />
          <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2 flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg w-10/12">
              <h3 className="text-lg font-bold text-custom-gray">What are your safeguarding responsibilities and how can you manage them?</h3>
              <p className="text-sm text-[#4CAF50] flex items-center">
                Readmore <img src={right} alt="Right Arrow" className="w-4 h-4 ml-2" />
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-1/3">
          <img src={image3} alt="Footer Image 3" className="w-full" />
          <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2 flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg w-10/12">
              <h3 className="text-lg font-bold text-custom-gray">Revamping the Membership Model with Triathlon Australia</h3>
              <p className="text-sm text-[#4CAF50] flex items-center">
                Readmore <img src={right} alt="Right Arrow" className="w-4 h-4 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
      
      </div>
    
  );
};

export default Bottom;

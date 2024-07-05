import React from 'react';
import icon1 from './Icon.png';
import icon2 from './Icon (1).png';
import icon3 from './Icon (2).png';
import rafiki from './rafiki.png';
import image from './image 9.png';
import logo1 from './Logo (1).png';
import logo2 from './Logo (2).png';
import logo3 from './Logo (3).png';
import logo4 from './Logo (4).png';
import logo5 from './Logo (5).png';
import logo6 from './Logo (6).png';
import right from './Right.png';

const MiddleSection = () => {
  return (
    <div>
      <div className="text-2xl flex justify-center items-center mt-4">
        <h1 className="font-bold text-center">
          Manage your entire community<br />
          in a single system
        </h1>
      </div>

      <p className="text-center mt-4">Who is Nextcent suitable for?</p>

      <div className="flex justify-center mt-4">
        <div className="w-1/3 p-4 flex flex-col items-center">
          <img src={icon1} alt="Icon 1" className="w-16 h-16 mb-2" />
          <h2 className="text-lg font-bold">Membership Organisations</h2>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="w-1/3 p-4 flex flex-col items-center">
          <img src={icon2} alt="Icon 2" className="w-16 h-16 mb-2" />
          <h2 className="text-lg font-bold">National Associations</h2>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="w-1/3 p-4 flex flex-col items-center">
          <img src={icon3} alt="Icon 3" className="w-16 h-16 mb-2" />
          <h2 className="text-lg font-bold">Clubs And Groups</h2>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <div className=" p-4 flex">
          <img src={rafiki} alt="Final Image" className="w-100 h-100" />
          <div>
            <h2 className="text-lg font-bold mb-2 mt-8">The unseen of spending three years at Pixelgrade</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button className="bg-[#4CAF50] text-white px-4 py-2 rounded mt-6">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className=" p-4 flex">
        <img src={image} alt="Final Image" className="w-100 h-100" />
        <div>
          <p className='mt-10'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
          <h2 className='mt-4  text-[#4CAF50] font-bold'> Tim Smith</h2>
          <p>British Dragon Boat Racing Association</p>
          <div className="flex items-center">
            <div className="flex space-x-15">
              <img src={logo1} alt="New Icon 1" className="w-16 h-16 m-2" />
              <img src={logo2} alt="New Icon 2" className="w-16 h-16 m-2" />
              <img src={logo3} alt="New Icon 3" className="w-16 h-16 m-2" />
              <img src={logo4} alt="New Icon 4" className="w-16 h-16 m-2" />
              <img src={logo5} alt="New Icon 5" className="w-16 h-16 m-2" />
              <img src={logo6} alt="New Icon 6" className="w-16 h-16 m-2" />
            </div>
            <p className="ml-4 text-[#4CAF50]">Meet all customers</p>
            <img src={right} alt="Right Icon" className="w-4 h-4 ml-2" />
          </div>
        </div>
       </div>
       <div>
        <h1 className='text-2xl flex justify-center items-center mt-4'>
        Caring is the new marketing
        </h1>
        <p className='text-center mt-4 w-1/2 mx-auto'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
       </div>
    </div>
  );
};

export default MiddleSection;

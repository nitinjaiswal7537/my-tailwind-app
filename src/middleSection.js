import React from 'react';
import CountUp from 'react-countup';
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
import icon4 from './Icon (3).png';
import icon5 from './Icon (4).png';
import icon6 from './Icon (5).png';
import icon7 from './Vector (1).png';
import pana from './pana.png';

const MiddleSection = () => {
  return (
    <div className='bg-white dark:bg-gray-800 text-black dark:text-white p-4 sm:mx-6 sm:mb-6 md:mx-8 md:mb-8'>
      <div className="text-2xl flex justify-center items-center mt-4">
        <h1 className="font-bold text-center">
          Manage your entire community<br />
          in a single system
        </h1>
      </div>

      <p className="text-center mt-4 sm:mx-6 sm:mb-6 md:mx-8 md:mb-8">Who is Nextcent suitable for?</p>

      <div className="flex justify-center mt-4 flex-wrap">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex flex-col items-center text-center">
          <img src={icon1} alt="Icon 1" className="w-16 h-16 mb-2" />
          <h2 className="text-lg font-bold">Membership Organisations</h2>
          <p className="text-center">Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex flex-col items-center text-center">
          <img src={icon2} alt="Icon 2" className="w-16 h-16 mb-2" />
          <h2 className="text-lg font-bold">National Associations</h2>
          <p className="text-center">Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex flex-col items-center text-center">
          <img src={icon3} alt="Icon 3" className="w-16 h-16 mb-2" />
          <h2 className="text-lg font-bold">Clubs And Groups</h2>
          <p className="text-center">Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>


      <div className="flex justify-center mt-12 sm:mx-6 sm:mb-6 md:mx-8 md:mb-8">
        <div className="p-4 flex flex-col sm:flex-row items-center">
          <img src={rafiki} alt="Final Image" className="w-64 h-64 mb-4 sm:mb-0 sm:mr-4" />
          <div>
            <h2 className="text-lg font-bold mb-2 mt-4 sm:mt-0">The unseen of spending three years at Pixelgrade</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button className="bg-[#4CAF50] text-white px-4 py-2 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>


      <div className="flex justify-center mt-12">
        <div className="p-4 mx-4 sm:mx-8 lg:mx-20 flex flex-col sm:flex-row w-full">
          <div className='w-full sm:w-1/2 flex flex-col justify-center'>
            <div className='text-center sm:text-left'>
              <div className='text-3xl font-bold'>
                <p>Helping a local </p>
                <p className='text-[#4CAF50]'>business reinvent itself</p>
              </div>
              <p className='mt-4'>We reached here with our hard work and dedication</p>
            </div>
          </div>
          <div className='w-full sm:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 sm:mb-0'>
            <div className="flex flex-row items-center">
              <img src={icon4} alt="Icon 1" className="w-8 h-8 mb-2 mr-2" />
              <div>
                <h2 className="text-lg font-bold">
                  <CountUp start={0} end={2245341} duration={3} />
                </h2>
                <p className=''>Members</p>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <img src={icon6} alt="Icon 2" className="w-8 h-8 mb-2 mr-2" />
              <div>
                <h2 className="text-lg font-bold">
                  <CountUp start={0} end={46328} duration={3} />
                </h2>
                <p className=''>Clubs</p>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <img src={icon5} alt="Icon 3" className="w-8 h-8 mb-2 mr-2" />
              <div>
                <h2 className="text-lg font-bold">
                  <CountUp start={0} end={828867} duration={3} />
                </h2>
                <p className=''>Events Booking</p>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <img src={icon7} alt="Icon 4" className="w-8 h-8 mb-2 mr-2" />
              <div>
                <h2 className="text-lg font-bold">
                  <CountUp start={0} end={1926436} duration={3} />
                </h2>
                <p className=''>Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <div className="p-4 flex flex-col sm:flex-row items-center">
          <img src={pana} alt="Final Image" className="w-64 h-64 mb-4 sm:mb-0 sm:mr-4" />
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold mb-2 mt-4">How to design your site footer like we did</h2>
            <p className="mb-4">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <button className="bg-[#4CAF50] text-white px-4 py-2 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>


      <div className="p-4 flex flex-col sm:flex-row items-center">
        <img src={image} alt="Final Image" className="w-full sm:w-1/3 h-auto mb-4 sm:mb-0 sm:mr-4" />
        <div className="text-center sm:text-left sm:w-2/3">
          <p className='mt-1 sm:mt-0 mx-4'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
          <h2 className='mt-4 text-[#556d56] font-bold mx-4'>Tim Smith</h2>
          <p className='mx-4'>British Dragon Boat Racing Association</p>
          <div className="flex items-center flex-wrap mx-4 sm:justify-start">
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-6 mb-2 sm:mb-0">
              <img src={logo1} alt="New Icon 1" className="w-12 h-12 m-1 sm:m-2" />
              <img src={logo2} alt="New Icon 2" className="w-12 h-12 m-1 sm:m-2" />
              <img src={logo3} alt="New Icon 3" className="w-12 h-12 m-1 sm:m-2 hidden sm:inline-block" />
              <img src={logo4} alt="New Icon 4" className="w-12 h-12 m-1 sm:m-2 hidden sm:inline-block" />
              <img src={logo5} alt="New Icon 5" className="w-12 h-12 m-1 sm:m-2 hidden sm:inline-block" />
            </div>
            <p className="ml-2 sm:ml-2 text-[#4CAF50] self-end">Meet all customers</p>
            <img src={right} alt="Right Icon" className="w-4 h-4 ml-1  self-end" />
          </div>
        </div>
         </div>
         <div className="text-center">
        <h1 className="text-2xl mt-4 sm:mt-6 md:mt-8">
          Caring is the new marketing
        </h1>
        <p className="mt-4 mx-auto max-w-2xl">
          The Nexcent blog is the best place to read about the latest membership insights, trends, and more. See who's joining the community, read about how our community is increasing their membership income, and lots more.
        </p>
      </div>

    </div>
  );
};

export default MiddleSection;

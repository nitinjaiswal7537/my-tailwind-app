import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import logo from './Logo.png'; // Adjust the path as necessary
import image1 from './Illustration.png'; // Add your images
import image2 from './Illustration.png';
import image3 from './Illustration.png';
import logo1 from './Vector.png';
import logo2 from './Logo (1).png';
import logo3 from './Logo (2).png';
import logo4 from './Logo (3).png';
import logo5 from './Logo (4).png';
import logo6 from './Logo (5).png';
import logo7 from './Logo (6).png';


const Topsection = () => {
  return (
    <div className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-30 mr-3" />
        </div>
        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-14">
            <li><a href="#" className="text-gray-800 hover:text-blue-500 no-underline">Home</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-500 no-underline">Service</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-500 no-underline">Feature</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-500 no-underline">Product</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-500 no-underline">Testimonial</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-500 no-underline">FAQ</a></li>
          </ul>
        </div>
        <div className="ml-8">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white px-3 py-2 rounded">
                Login
              </a>
            </li>
            <li>
              <a href="#" className="text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white px-3 py-2 rounded">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mx-auto flex flex-col md:flex-row mt-20">
        <div className="md:pl-8  md:mt-0">
           <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            useKeyboardArrows
            autoPlay
            interval={3000}
            className="w-full  mx-auto"
            style={{ height: '800px' }} 
          >
            <div className="flex items-center">
              <div className="w-1/2 md:pr-2">
                <h1 className="text-3xl font-bold mb-4 ">Lessons and Insights</h1>
                <h1 className="text-3xl font-bold mb-4  text-[#4CAF50]">from 8 years</h1>
                <h6 className="text-gray-700 ">
                  Where to grow your business as a photographer: site or social media?
                </h6>
                <button className="  bg-[#4CAF50] text-white px-4 py-2 rounded">
                  Register
                </button>
              </div>
              <img src={image1} alt="Image 1" className="w-1/4 max-h-80 object-contain" />
            </div>
            <div className="flex items-center">
              <div className="w-1/2 md:pr-2">
                <h1 className="text-3xl font-bold mb-4 ">Lessons and Insights</h1>
                <h1 className="text-3xl font-bold mb-4  text-[#4CAF50]">from 8 years</h1>
                <h6 className="text-gray-700 ">
                  Where to grow your business as a photographer: site or social media?
                </h6>
                <button className=" bg-[#4CAF50] text-white px-4 py-2 rounded">
                  Register
                </button>
              </div>
              <img src={image1} alt="Image 1" className="w-1/4 max-h-80 object-contain" />
            </div>
            <div className="flex items-center">
              <div className="w-1/2 md:pr-2">
                <h1 className="text-3xl font-bold mb-4 ">Lessons and Insights</h1>
                <h1 className="text-3xl font-bold mb-4  text-[#4CAF50]">from 8 years</h1>
                <h6 className="text-gray-700 ">
                  Where to grow your business as a photographer: site or social media?
                </h6>
                <button className="bg-[#4CAF50] text-white px-4 py-2 rounded">
                  Register
                </button>
              </div>
              <img src={image1} alt="Image 1" className="w-1/4 max-h-80 object-contain" />
            </div>
          </Carousel>
          <div className="mt-10 flex justify-center items-center">
            <div className="text-center mb-4">
              <p className="text-lg font-bold">Our Clients</p>
              <p>We have been working with some Fortune 500+ clients</p>
            </div>
            </div>
            <div className="flex justify-center w-full">
              <div className="flex flex-wrap justify-center">
                <div className="flex items-center flex-col mx-8 mb-8">
                  <img src={logo1} alt="Client 1" className="w-20 h-20 object-contain mb-2" />
                </div>
                <div className="flex items-center flex-col mx-8 mb-8">
                  <img src={logo2} alt="Client 2" className="w-20 h-20 object-contain mb-2" />
                </div>
                <div className="flex items-center flex-col mx-8 mb-8">
                  <img src={logo3} alt="Client 3" className="w-20 h-20 object-contain mb-2" />
                </div>
                <div className="flex items-center flex-col mx-8 mb-8">
                  <img src={logo4} alt="Client 4" className="w-20 h-20 object-contain mb-2" />
                </div>
                <div className="flex items-center flex-col mx-8 mb-8">
                  <img src={logo5} alt="Client 5" className="w-20 h-20 object-contain mb-2" />
                </div>
                <div className="flex items-center flex-col mx-8 mb-8">
                  <img src={logo6} alt="Client 6" className="w-20 h-20 object-contain mb-2" />
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Topsection;
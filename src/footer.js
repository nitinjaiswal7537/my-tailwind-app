import React from 'react';
import iconnew from './iconnew.png';
import nexcent from './Nexcent.png';
import random from './new.png';
import instagram from './Path.png';
import youtube from './youtube.png';
import twitter from './twitter.png';
import right from './Down.png';

const Footer = () => {
    return (
        <div className='bg-white dark:bg-gray-800 text-black dark:text-white p-4'>
            <div className="text-center w-1/3 mx-auto mt-4">
                <p className="text-3xl font-bold mt-20 ">
                    Pellentesque suscipit fringilla libero eu.
                </p>
                <button className="bg-[#4CAF50] text-white px-4 py-2 rounded mt-6 mb-6 text-sm flex items-center mx-40">
    Get a Demo
    <img src={right} alt="Right Arrow" className="w-2 h-2 ml-2" />
</button>

            </div>

            <footer className="bg-custom-black">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a className="flex items-center">
                                <img src={iconnew} className="h-8 me-2" />
                                <img src={nexcent} className="h-8 me-2" />
                            </a>
                            <p className="mt-20 text-white">Copyright © 2020 Nexcent ltd.</p>
                            <p className="text-white">All rights reserved</p>
                            <div className="flex justify-items-stretch sm:mt-10">
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white me-2">
                                    <img src={instagram} className="h-4" />
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white me-2">
                                    <img src={random} className="h-4" />
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white me-2">
                                    <img src={twitter} className="h-4" />
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white me-2">
                                    <img src={youtube} className="h-4" />
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:gap-4 sm:grid-cols-3"> 
                            <div>
                                <h2 className="mb-6 text-lg font-semibold text-white  dark:text-white">Company</h2>
                                <ul className="text-white text-xs dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a className="hover:underline">About us</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Blog</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Contact us</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Pricing</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Testimonials</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-lg font-semibold text-white  dark:text-white">Support</h2>
                                <ul className="text-white text-xs dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a className="hover:underline">Help Center</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Term of Service</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Legal</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Privacy policy</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Status</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Stay up to Date</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-small">
                                    <li className="mb-4 flex items-center">
                                        <input
                                            className="bg-gray-300 rounded-full px-2 py-2 outline-none focus:bg-white"
                                        
                                            placeholder="Your Email Address"
                                        />
                                       
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

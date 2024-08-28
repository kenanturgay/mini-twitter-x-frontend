import React from 'react';
import { TwitterLogo } from '../components/Icon';
import { Menu } from '../components/Menu';

const Sidebar = () => {
  return (
    <div className="h-screen p-4 w-72 ">
      <div className='mb-12'><TwitterLogo/></div>
      <Menu></Menu>
      <button className="w-11/12 py-3 rounded-full bg-twitter-blue text-white text-lg cursor-pointer mb-4 mt-4 hover:bg-twitter-light-blue">
        Tweet
      </button>
    </div>
  );
};

export default Sidebar;

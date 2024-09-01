import React, { useContext } from 'react';
import { TwitterLogo } from '../components/Icon';
import { Menu } from '../components/Menu';
import pp from '../assets/userpics/profilepic.png'
import vector from '../assets/userpics/vector.png'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
const Sidebar = () => {
  const {setToken, userData, setUserData} = useContext(UserContext);

  const navigate = useNavigate();
  const handleLogOut = () => {
    setToken(null);
    setUserData(null);
    navigate("/login")
  }
  return (
    <div className="flex flex-col h-screen p-4 w-72 justify-between border-r">
      <div>
        <div className='mb-12'><TwitterLogo/></div>
        <Menu/>
        <button className="w-11/12 py-3 rounded-full bg-twitter-blue text-white text-lg cursor-pointer mb-4 mt-4 hover:bg-twitter-light-blue">
          Tweet
        </button>
        </div>
        <button onClick={handleLogOut} className='flex items-center gap-4 justify-between hover:bg-gray-200'>
          <div className='flex items-center gap-2'>
          <img src={pp} alt="" />
          <div>{userData}</div>
          </div>
          <img src={vector} alt="" />
      </button>
    </div>
  );
};

export default Sidebar;

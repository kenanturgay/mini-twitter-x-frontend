import React from 'react';
import { FaHome, FaHashtag, FaBell, FaEnvelope } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { id: 1, name: 'Home', icon: <FaHome />, path: '/' },
  { id: 2, name: 'Explore', icon: <FaHashtag />, path: '/explore' },
  { id: 3, name: 'Notifications', icon: <FaBell />, path: '/notifications' },
  { id: 4, name: 'Messages', icon: <FaEnvelope />, path: '/messages' }
];

const Sidebar = () => {
  return (
    <div className="h-screen p-4 bg-gray-100 w-72 bg-blue-500">
      <ul className="space-y-4">
        {menuItems.map(item => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-4 text-lg p-2 bg-blue-500 text-white rounded-lg"
                  : "flex items-center space-x-4 text-lg p-2 hover:bg-gray-200 rounded-lg"
              }
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

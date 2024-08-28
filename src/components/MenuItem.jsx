import { NavLink } from "react-router-dom"

export const MenuItem = ({id,path,icon,name,activeIcon}) => {
  return (
    <li key={id}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-4 text-lg p-2 rounded-lg font-bold"
                  : "flex items-center space-x-4 text-lg p-2 hover:bg-gray-200 rounded-lg"
              }
            >
             {({ isActive }) => (
          <>
            <span className="flex items-center justify-center w-6 h-6"
            >{isActive ? activeIcon : icon}</span>
            <span>{name}</span>
          </>
        )}
            </NavLink>
          </li>
  )
}

import { NavLink } from "react-router-dom";

export const MenuItem = ({ id, path, icon, name, activeIcon }) => {
  return (
    <li key={id}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? "inline-flex items-center space-x-4 text-lg py-2 pl-4 pr-5 font-bold hover:bg-tw-hover rounded-full"
            : "inline-flex items-center space-x-4 text-lg py-2 pl-4 pr-5 hover:bg-tw-hover rounded-full"
        }
      >
        {({ isActive }) => (
          <>
            <span className="flex items-center justify-center w-7 h-7">
              {isActive ? activeIcon : icon}
            </span>
            <span>{name}</span>
          </>
        )}
      </NavLink>
    </li>
  );
};

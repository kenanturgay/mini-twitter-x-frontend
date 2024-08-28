import { NavLink } from "react-router-dom"

export const MenuItem = ({to, label }) => {
  return (
    <li>
      <NavLink 
        to={to}    /* mesela "/explore" */
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img src={testo} alt= {label}  /* mesela "Explore" *//>
        <span>{label}  { /* Ana Sayfa */}</span>
      </NavLink>
    </li>
  )
}

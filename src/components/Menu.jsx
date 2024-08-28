import menuItems from '../constants/menuItems';
import { MenuItem } from './MenuItem';


export const Menu = () => {
  return (
    <nav>
    <ul className="space-y-4">
    {menuItems.map(({id,path,icon,name,activeIcon}) => (
      <MenuItem key={id} path={path} icon={icon} name={name} activeIcon={activeIcon}/>))}
    </ul>
  </nav>
  )
}

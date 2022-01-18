import { navbarCenterMenuLg, navbarRightMenuLg } from '../lists/navbar-menus';
import NavbarListMenu from './NavbarListMenu';
import Tesla from './Tesla';

function Navbar() {
  return (
    <div className="bg-transparent h-14 w-full fixed top-0 left-0 z-10">
      <div className="container flex justify-between items-center h-full">
        <Tesla />
        <div className="grow-0 hidden xl:flex items-center justify-center relative ml-14">
          {navbarCenterMenuLg.map((item) => (
            <NavbarListMenu key={item.id} item={item} />
          ))}
        </div>
        <div className="hidden xl:flex items-center justify-center relative">
          {navbarRightMenuLg.map((item) => (
            <NavbarListMenu key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

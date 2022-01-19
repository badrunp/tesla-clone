import { navbarCenterMenuLg, navbarRightMenuLg } from '../lists/navbar-menus';
import NavbarListMenu from './NavbarListMenu';
import Tesla from './Tesla';
import ButtonNavbarListMenu from './ButtonNavbarListMenu';

function Navbar({ handleSidebarActive }) {
  return (
    <div className="bg-transparent h-14 w-full fixed top-0 left-0 z-10 px-4 sm:px-0">
      <div className="container flex justify-between items-center h-full">
        <Tesla />
        <div className="grow-0 hidden xl:flex items-center justify-center relative ml-14">
          {navbarCenterMenuLg.map((item) => (
            <NavbarListMenu key={item.id} item={item} />
          ))}
        </div>
        <div className="flex items-center justify-center relative">
          {navbarRightMenuLg.map((item) =>
            item.url != null ? (
              <NavbarListMenu
                key={item.id}
                item={item}
                className={`${item.id === navbarRightMenuLg.length ? 'block' : 'hidden xl:block'}`}
              />
            ) : (
              <ButtonNavbarListMenu
                onCLick={handleSidebarActive}
                key={item.id}
                item={item}
                className="bg-gray-500/20 xl:bg-transparent"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

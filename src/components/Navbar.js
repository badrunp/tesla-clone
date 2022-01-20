import { useState } from 'react';
import { motion } from 'framer-motion';
import { navbarCenterMenuLg } from '../lists/navbar-menus';
import NavbarListMenu from './NavbarListMenu';
import Tesla from './Tesla';

function Navbar({ handleSidebarActive }) {
  const [isHover, setIsHover] = useState(false);

  const hanldeActiveHover = (hover) => {
    setIsHover(hover);
  };

  const handleUnActiveHover = () => {
    setIsHover(false);
  };

  return (
    <div className="bg-transparent h-14 w-full fixed top-0 left-0 z-10 px-4 sm:px-0">
      <div className="container flex justify-between items-center h-full">
        <Tesla />
        <motion.div
          className="grow-0 flex items-center justify-center relative ml-14 py-2"
          onHoverEnd={handleUnActiveHover}>
          {navbarCenterMenuLg.map((item) => {
            const active = isHover === item.title ? 'true' : 'false';
            return (
              <NavbarListMenu
                key={item.id}
                item={item}
                active={active}
                handleActive={hanldeActiveHover}
                handleSidebarActive={handleSidebarActive}
                className={`${item.id === 7 && 'ml-40'}`}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;

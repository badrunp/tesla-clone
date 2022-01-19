import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ButtonNavbarListMenu from './ButtonNavbarListMenu';

function NavbarListMenu({
  item: { title, url },
  className = '',
  active = false,
  handleActive,
  handleSidebarActive,
  ...props
}) {
  return (
    <motion.div
      onHoverStart={() => handleActive(title)}
      className={`relative cursor-pointer ${className} ${url != null && 'hidden xl:block'}`}>
      {active === 'true' && (
        <motion.div
          className="absolute inset-0 bg-gray-500/20 rounded-full pointer-events-none"
          layoutId={'active'}
        />
      )}

      {url != null ? (
        <Link
          to="/"
          {...props}
          className={`block text-gray-900 font-semibold text-[14px] tracking-wide px-4 rounded-full py-[6px]`}>
          {title}
        </Link>
      ) : (
        <ButtonNavbarListMenu
          onCLick={handleSidebarActive}
          title={title}
          className="bg-gray-500/20 xl:bg-transparent"
        />
      )}
    </motion.div>
  );
}

export default NavbarListMenu;

import { motion } from 'framer-motion';
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
    <div className={`relative ${className} ${url != null && 'hidden xl:block'}`}>
      {active === 'true' && (
        <motion.div className="absolute inset-0 bg-gray-500/20 rounded-full" layoutId={'active'} />
      )}

      {url != null ? (
        <motion.a
          href={url}
          {...props}
          onHoverStart={() => handleActive(title)}
          className={`block text-gray-900 font-semibold text-[14px] tracking-wide px-4 rounded-full py-[6px]`}>
          {title}
        </motion.a>
      ) : (
        <ButtonNavbarListMenu
          onCLick={handleSidebarActive}
          onHoverStart={() => handleActive(title)}
          title={title}
          className="bg-gray-500/20 xl:bg-transparent"
        />
      )}
    </div>
  );
}

export default NavbarListMenu;

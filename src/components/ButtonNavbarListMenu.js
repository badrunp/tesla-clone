import { motion } from 'framer-motion';

function NavbarListMenu({ title, onCLick = null, className = '', ...props }) {
  return (
    <motion.button
      type="button"
      onClick={onCLick}
      {...props}
      className={`${className} block text-gray-900 font-semibold text-[14px] tracking-wide px-4 rounded-full py-[6px] focus:outline-none relative`}>
      {title}
    </motion.button>
  );
}

export default NavbarListMenu;

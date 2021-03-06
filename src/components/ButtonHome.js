import { motion } from 'framer-motion';
import { SubtitleHomeVariant } from '../lists/variants';

function ButtonHome({ children, className = 'bg-white', isTransition }) {
  return (
    <motion.button
      variants={SubtitleHomeVariant}
      initial="hidden"
      animate="visible"
      custom={isTransition ? 1.2 : 0.2}
      type="button"
      className={`py-3 ${className} rounded-full uppercase text-xs w-full md:w-[256px] block font-semibold tracking-wide bg-opacity-80`}>
      {children}
    </motion.button>
  );
}

export default ButtonHome;

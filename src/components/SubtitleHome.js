import { motion } from 'framer-motion';
import { SubtitleHomeVariant } from '../lists/variants';

function SubtitleHome({ text, isTransition }) {
  return (
    <motion.p
      variants={SubtitleHomeVariant}
      initial="hidden"
      animate="visible"
      custom={isTransition ? 1.2 : 0.2}
      className="block text-gray-600 tracking-normal w-max truncate">
      {text}
    </motion.p>
  );
}

export default SubtitleHome;

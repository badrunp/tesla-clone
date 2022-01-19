import { motion } from 'framer-motion';
import { SubtitleHomeVariant } from '../lists/variants';

function SubtitleHome({ text }) {
  return (
    <motion.p
      variants={SubtitleHomeVariant}
      initial="hidden"
      animate="visible"
      className="block text-gray-600 tracking-normal w-max truncate">
      {text}
    </motion.p>
  );
}

export default SubtitleHome;

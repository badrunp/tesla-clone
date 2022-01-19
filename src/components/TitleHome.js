import { motion } from 'framer-motion';
import { titleHomeVariant } from '../lists/variants';

function TitleHome({ text }) {
  return (
    <motion.h2
      variants={titleHomeVariant}
      initial="hidden"
      animate="visible"
      className="block text-4xl md:text-5xl tracking-normal md:tracking-wide font-semibold text-gray-700 w-max truncate mb-1">
      {text}
    </motion.h2>
  );
}

export default TitleHome;

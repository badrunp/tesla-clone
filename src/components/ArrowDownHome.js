import { motion } from 'framer-motion';
import { arrowDownHomeVariant } from '../lists/variants';

function ArrowDownHome() {
  return (
    <motion.div variants={arrowDownHomeVariant} initial="hidden" animate="visible">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9 text-black animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </motion.div>
  );
}

export default ArrowDownHome;

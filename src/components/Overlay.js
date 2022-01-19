import { AnimatePresence, motion } from 'framer-motion';
import { overlayVariant } from '../lists/variants';

function Overlay({ active, close }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.button
          variants={overlayVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
          type="button"
          onClick={close}
          className="fixed w-full h-full inset-0 bg-black/40 z-20"
        />
      )}
    </AnimatePresence>
  );
}

export default Overlay;

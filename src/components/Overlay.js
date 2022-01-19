import { AnimatePresence, motion } from 'framer-motion';

const overlayVariant = {
  hidden: {
    opcaity: 0
  },
  visible: {
    opacity: 1
  }
};

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

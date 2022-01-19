const sidebarVariant = {
  hidden: {
    opcity: 0,
    x: 320
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 350,
      damping: 30,
      mass: 1
    }
  }
};

const sidebarMenuVariant = {
  hidden: {
    opacity: 0,
    x: -50
  },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i / 50
    }
  })
};

const overlayVariant = {
  hidden: {
    opcaity: 0
  },
  visible: {
    opacity: 1
  }
};

export { sidebarVariant, sidebarMenuVariant, overlayVariant };

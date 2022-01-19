const sidebarVariant = {
  hidden: {
    opcity: 0,
    x: 320,
    transition: {
      type: 'tween',
      duration: 0.2
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.2
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
      delay: i / 55
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

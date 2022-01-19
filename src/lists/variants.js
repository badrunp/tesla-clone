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
    opacity: 0
  },
  visible: (i) => ({
    opacity: 1,
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

const SubtitleHomeVariant = {
  hidden: {
    opacity: 0,
    y: 30,
    transition: {
      type: 'tween'
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.8,
      delay: 1.2
    }
  }
};
const arrowDownHomeVariant = {
  hidden: {
    opacity: 0,
    y: 30,
    transition: {
      type: 'tween'
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.8,
      delay: 1.8
    }
  }
};

const titleHomeVariant = {
  hidden: {
    opacity: 0,
    y: 30,
    transition: {
      type: 'tween'
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.8
    }
  }
};

export {
  sidebarVariant,
  sidebarMenuVariant,
  overlayVariant,
  SubtitleHomeVariant,
  titleHomeVariant,
  arrowDownHomeVariant
};

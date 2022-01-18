function NavbarListMenu({ item: { title }, onCLick = null, className = '' }) {
  return (
    <button
      type="button"
      onClick={onCLick && onclick}
      className={`${className} block text-gray-900 font-semibold text-[14px] tracking-wide px-4 rounded-full py-[6px] hover:bg-gray-500/20`}>
      {title}
    </button>
  );
}

export default NavbarListMenu;

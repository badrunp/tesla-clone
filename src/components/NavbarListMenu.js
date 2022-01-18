function NavbarListMenu({ item: { title, url } }) {
  return (
    <a
      href={url}
      className="block text-gray-900 font-semibold text-[14px] tracking-wide px-4 rounded-full py-[6px] hover:bg-gray-500/20">
      {title}
    </a>
  );
}

export default NavbarListMenu;

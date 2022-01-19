import { useState } from 'react';
import Title from '../hooks/Title';
import Navbar from './Navbar';
import Overlay from './Overlay';
import Sidebar from './Sidebar';

function Layout({ children, title = 'Tesla' }) {
  Title(title);

  const [sidebarActive, setSidevarActive] = useState(false);

  const handleSidebarActive = () => {
    setSidevarActive(!sidebarActive);
  };

  const handleSidebarClose = () => {
    setSidevarActive(false);
  };

  return (
    <>
      <Overlay active={sidebarActive} close={handleSidebarClose} />
      <Navbar handleSidebarActive={handleSidebarActive} />
      <Sidebar active={sidebarActive} close={handleSidebarClose} />
      {children}
    </>
  );
}

export default Layout;

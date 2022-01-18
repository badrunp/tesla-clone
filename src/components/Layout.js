import Title from '../hooks/Title';
import Navbar from './Navbar';

function Layout({ children, title = 'Tesla' }) {
  Title(title);

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;

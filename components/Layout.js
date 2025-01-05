import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, onSearch }) => {
  return (
    <div>
      <Navbar onSearch={onSearch} />
      
      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;

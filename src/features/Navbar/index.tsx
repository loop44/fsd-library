import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="bg-slate-200 flex items-center justify-around py-4">
    <Link to="/">
      <img src="/icons/fileIcon.svg" alt="" />
    </Link>
    <Link to="/search">
      <img src="/icons/addFileIcon.svg" alt="" />
    </Link>
    <Link to="/favourite">
      <img src="/icons/favourite.svg" alt="" />
    </Link>
  </div>
);

export default Navbar;

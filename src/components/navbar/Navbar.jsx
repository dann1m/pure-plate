import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <Link to="/" className="navbar-link">PURE PLATE</Link>
      </div>
      <ul className="nav-menu">
        <li><Link to="/about" className="navbar-link">about</Link></li>
        <li><Link to="/recipes" className="navbar-link">recipes</Link></li>
        <li><Link to="/substitutes" className="navbar-link">substitutes</Link></li>
        <li><Link to="/dietary-info" className="navbar-link_diet">dietary info</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;


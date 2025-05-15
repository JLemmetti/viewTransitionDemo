import { Link } from '@tanstack/react-router';
import { FaHome } from 'react-icons/fa';

const Navigation = () => {
  return (
    <nav className="p-2 flex gap-2">
      <Link to="/" className="flex items-center gap-1">
        <FaHome /> Home
      </Link>
      <Link to="/slide1">Presentation</Link>
    </nav>
  );
};

export default Navigation;

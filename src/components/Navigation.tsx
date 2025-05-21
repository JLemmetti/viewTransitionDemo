import { Link } from '@tanstack/react-router';
import { FaHome } from 'react-icons/fa';
import { MdOutlineSlideshow } from 'react-icons/md';

const Navigation = () => {
  return (
    <nav className="p-6 flex gap-8 text-xl font-semibold bg-gradient-to-r from-blue-900/60 via-purple-900/60 to-pink-900/60 shadow-lg backdrop-blur-md text-blue-100">
      <Link to="/" className="flex items-center gap-1 hover:text-teal-500">
        <FaHome /> Home
      </Link>
      <Link to="/Start" className="flex items-center gap-1 hover:text-teal-500">
        <MdOutlineSlideshow /> Slides
      </Link>
      <Link to="/Demos" className="flex items-center gap-1 hover:text-teal-500">
        <MdOutlineSlideshow /> Demos
      </Link>
    </nav>
  );
};

export default Navigation;

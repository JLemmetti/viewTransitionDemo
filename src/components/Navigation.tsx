import { Link } from '@tanstack/react-router';
import { FaHome } from 'react-icons/fa';
import { MdOutlineSlideshow } from 'react-icons/md';

const Navigation = () => {
  return (
    <nav className="p-4 flex gap-5 text-lg">
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

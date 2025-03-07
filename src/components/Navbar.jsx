import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-around">
      <Link to="/" className="hover:text-blue-400">Home</Link>
      <Link to="/about" className="hover:text-blue-400">About</Link>
      <Link to="/blog" className="hover:text-blue-400">Blog</Link>
      <Link to="/contact" className="hover:text-blue-400">Contact</Link>
    </nav>
  );
}

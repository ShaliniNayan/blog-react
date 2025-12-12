import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav
      className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-purple-200"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-transform">
          MyBlog 🚀
        </Link>
        <div className="flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 font-bold hover:text-purple-600 transition-colors">Home</Link>
          <Link to="/about" className="text-gray-700 font-bold hover:text-purple-600 transition-colors">About</Link>
          <Link to="/blog" className="text-gray-700 font-bold hover:text-purple-600 transition-colors">Blog</Link>
          <Link to="/create-post" className="text-gray-700 font-bold hover:text-purple-600 transition-colors">Write ✍️</Link>
          <Link to="/contact" className="text-gray-700 font-bold hover:text-purple-600 transition-colors">Contact</Link>

          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-purple-600 font-bold">Hi, {user.name}!</span>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-md transform transition hover:scale-105"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex space-x-3">
              <Link to="/login" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-md transform transition hover:scale-105">
                Login
              </Link>
              <Link to="/signup" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full shadow-md transform transition hover:scale-105">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

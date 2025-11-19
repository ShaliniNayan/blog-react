import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 shadow-lg sticky top-0 z-50 border-b-4 border-indigo-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-black tracking-tighter hover:text-yellow-300 transition-colors drop-shadow-md flex items-center gap-2">
          <motion.span
            initial={{ rotate: -10 }}
            animate={{ rotate: 10 }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          >
            🎨
          </motion.span>
          MyBlog
        </Link>
        <div className="flex items-center space-x-6 font-bold text-lg">
          <Link to="/" className="hover:text-yellow-300 transition-transform hover:scale-110">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 transition-transform hover:scale-110">About</Link>
          <Link to="/blog" className="hover:text-yellow-300 transition-transform hover:scale-110">Blog</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition-transform hover:scale-110">Contact</Link>

          {user ? (
            <div className="flex items-center space-x-4 ml-4 bg-indigo-700 py-1 px-4 rounded-full border-2 border-indigo-400">
              <span className="text-yellow-300">Hi, {user.name}!</span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full shadow-md transition-all hover:shadow-lg"
              >
                Logout
              </motion.button>
            </div>
          ) : (
            <div className="flex space-x-3 ml-4">
              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-indigo-900 px-4 py-2 rounded-full hover:bg-yellow-300 shadow-md transition-all font-extrabold"
                >
                  Login
                </motion.button>
              </Link>
              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-indigo-600 px-4 py-2 rounded-full hover:bg-gray-100 shadow-md transition-all font-extrabold"
                >
                  Signup
                </motion.button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Post() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-purple-50 p-10 flex justify-center">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white p-10 rounded-3xl shadow-xl max-w-4xl w-full border-t-8 border-purple-500"
      >
        <Link to="/blog" className="text-purple-500 font-bold mb-6 inline-block hover:underline">← Back to Blog</Link>
        <h1 className="text-5xl font-black text-gray-800 mb-6">Amazing Post #{id}</h1>
        <div className="h-64 bg-gray-200 rounded-2xl mb-8 overflow-hidden">
          {/* Placeholder for dynamic post image if we had a real backend */}
          <div className="w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white text-2xl font-bold">
            Post Image Placeholder
          </div>
        </div>
        <div className="prose prose-lg max-w-none text-gray-600">
          <p>
            This is where the content of the blog post would go. Imagine a beautiful story about art, technology, or life.
            The design is now much more vivid and engaging, encouraging readers to stay longer.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

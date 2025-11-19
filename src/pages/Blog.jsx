import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogArtImg from "../assets/blog_art.png";
import blogTechImg from "../assets/blog_tech.png";

const posts = [
  {
    id: 1,
    title: "The Beauty of Art",
    excerpt: "Exploring the world of art through colors and shapes...",
    image: blogArtImg,
    category: "Art"
  },
  {
    id: 2,
    title: "Future Tech Trends",
    excerpt: "Robots, AI, and the future of our digital lives...",
    image: blogTechImg,
    category: "Tech"
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-purple-50 p-10">
      <h1 className="text-5xl font-black text-center text-purple-800 mb-12 drop-shadow-sm">Our Blog ✍️</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white hover:border-purple-300 transition-all"
          >
            <div className="h-64 overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <span className="bg-purple-100 text-purple-600 py-1 px-3 rounded-full text-sm font-bold mb-4 inline-block">{post.category}</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h2>
              <p className="text-gray-600 text-lg mb-6">{post.excerpt}</p>
              <Link to={`/post/${post.id}`} className="text-purple-600 font-bold text-lg hover:text-purple-800 flex items-center">
                Read more <span className="ml-2">→</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { useBlog } from "../context/BlogContext";

export default function Blog() {
  const { posts } = useBlog();

  return (
    <div className="min-h-screen bg-purple-50 p-10">
      <div className="flex justify-between items-center mb-12 container mx-auto">
        <h1 className="text-5xl font-black text-purple-800 drop-shadow-sm">Our Blog ✍️</h1>
        <Link to="/create-post" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-transform hover:scale-105">
          + Write New
        </Link>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white hover:border-purple-300 transition-all hover:scale-[1.02]"
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
          </div>
        ))}
      </div>
    </div>
  );
}

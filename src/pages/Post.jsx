import { useParams, Link } from "react-router-dom";
import { useBlog } from "../context/BlogContext";

export default function Post() {
  const { id } = useParams();
  const { posts } = useBlog();

  const post = posts.find(p => p.id.toString() === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post not found 😕</h1>
          <Link to="/blog" className="text-purple-600 hover:underline text-xl">Return to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-purple-50 p-10 flex justify-center">
      <div
        className="bg-white p-10 rounded-3xl shadow-xl max-w-4xl w-full border-t-8 border-purple-500 animate-fade-in-up"
      >
        <Link to="/blog" className="text-purple-500 font-bold mb-6 inline-block hover:underline">← Back to Blog</Link>
        <span className="block text-sm font-bold text-purple-400 mb-2 uppercase tracking-wide">{post.category}</span>
        <h1 className="text-5xl font-black text-gray-800 mb-6">{post.title}</h1>
        <div className="h-96 bg-gray-200 rounded-2xl mb-8 overflow-hidden shadow-inner">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="text-xl font-medium text-gray-800 mb-6">{post.excerpt}</p>
          <div className="whitespace-pre-wrap">{post.content || "No content available for this post."}</div>
        </div>
      </div>
    </div>
  );
}

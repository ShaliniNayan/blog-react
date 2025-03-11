import { Link } from "react-router-dom";
import './index.css';

const posts = [
  { id: 1, title: "My First Blog Post", excerpt: "This is the first post..." },
  { id: 2, title: "The Beauty of Art", excerpt: "Exploring the world of art..." },
];

export default function Blog() {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center">Blog Posts</h1>
      <div className="mt-6 space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border border-gray-300 rounded-lg">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link to={`/post/${post.id}`} className="text-blue-500">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

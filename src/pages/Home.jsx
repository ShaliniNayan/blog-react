import { Link } from "react-router-dom";
import disneyHero from "../assets/disney_hero.png";
import disneyMascot from "../assets/disney_mascot.png";
import { useBlog } from "../context/BlogContext";

export default function Home() {
  const { posts } = useBlog();
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden">
        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-6xl md:text-7xl font-black mb-6 drop-shadow-lg text-yellow-300 animate-pulse">
              Welcome to <br /> My Magical World! ✨
            </h1>
            <p className="text-2xl mb-8 font-medium drop-shadow-md text-purple-100">
              Where dreams, stories, and creativity come to life.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Link to="/blog" className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-4 px-10 rounded-full shadow-2xl transform transition hover:scale-110 border-4 border-white">
                Start Reading 📖
              </Link>
              <Link to="/create-post" className="bg-white hover:bg-gray-100 text-purple-600 font-bold py-4 px-10 rounded-full shadow-2xl transform transition hover:scale-110">
                Write a Story ✍️
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 relative">
            <img
              src={disneyHero}
              alt="Disney Princess"
              className="w-full max-w-md mx-auto drop-shadow-2xl animate-bounce-slow"
            />
            <img
              src={disneyMascot}
              alt="Mascot"
              className="absolute -bottom-10 -right-10 w-40 animate-bounce-fast hidden md:block"
            />
          </div>
        </div>

        {/* Decorative sparkles */}
        <div className="absolute top-10 left-10 text-4xl animate-spin-slow">✨</div>
        <div className="absolute bottom-20 right-20 text-6xl animate-ping-slow">🌟</div>
        <div className="absolute top-1/2 left-1/2 text-2xl animate-pulse">💫</div>
      </div>

      {/* Featured Section */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-5xl font-black text-center text-purple-800 mb-16 drop-shadow-sm">Latest Adventures 🏰</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-purple-100 hover:border-pink-300 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <span className="bg-pink-100 text-pink-600 py-1 px-3 rounded-full text-sm font-bold mb-3 inline-block">{post.category}</span>
                <h3 className="text-2xl font-bold text-purple-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <Link to={`/post/${post.id}`} className="text-pink-500 font-bold hover:text-pink-700 uppercase tracking-wide text-sm">Read Story &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

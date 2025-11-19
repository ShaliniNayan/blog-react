```javascript
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import homeHero from "../assets/home_hero.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-400 to-blue-200 text-white overflow-hidden">
        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left z-10"
          >
            <h1 className="text-6xl font-black mb-6 drop-shadow-lg text-yellow-300">
              Welcome to <br/> My Creative World! 🌍
            </h1>
            <p className="text-xl mb-8 font-medium drop-shadow-md">
              A space for art, thoughts, and creativity. Join me on this colorful journey!
            </p>
            <Link to="/blog" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 inline-block">
              Read the Blog 📖
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 mt-10 md:mt-0"
          >
            <img 
              src={homeHero} 
              alt="Creative World" 
              className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </motion.div>
        </div>
        
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      {/* Featured Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-indigo-900 mb-12">Latest Adventures</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Placeholders for featured posts, can be dynamic later */}
           {[1, 2, 3].map((item) => (
             <motion.div 
               key={item}
               whileHover={{ y: -10 }}
               className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-indigo-100"
             >
               <div className="h-48 bg-gray-200"></div>
               <div className="p-6">
                 <h3 className="text-xl font-bold text-indigo-800 mb-2">Amazing Post Title {item}</h3>
                 <p className="text-gray-600">Some sneak peek text about this amazing post...</p>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
```

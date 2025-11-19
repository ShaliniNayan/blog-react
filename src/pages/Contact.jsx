```
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-10">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg border-4 border-green-300"
      >
        <h1 className="text-4xl font-black text-green-600 mb-6 text-center">Get in Touch! 📬</h1>
        <form className="flex flex-col space-y-6">
          <input type="text" placeholder="Your Name" className="p-4 border-2 border-green-100 rounded-xl focus:border-green-400 focus:outline-none bg-green-50" />
          <input type="email" placeholder="Your Email" className="p-4 border-2 border-green-100 rounded-xl focus:border-green-400 focus:outline-none bg-green-50" />
          <textarea placeholder="Your Message" className="p-4 border-2 border-green-100 rounded-xl h-32 focus:border-green-400 focus:outline-none bg-green-50"></textarea>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white py-4 rounded-xl font-bold text-xl shadow-lg hover:bg-green-600 transition-colors"
          >
            Send Message 🚀
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
```

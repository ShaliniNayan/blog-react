import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8 text-center mt-auto border-t-4 border-gray-700">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container mx-auto"
      >
        <p className="text-lg font-medium">© {new Date().getFullYear()} My Blog | Made with 💖 and ✨</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">LinkedIn</a>
        </div>
      </motion.div>
    </footer>
  );
}

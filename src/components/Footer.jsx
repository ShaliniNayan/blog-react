export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8 text-center mt-auto border-t-4 border-gray-700">
      <div
        className="container mx-auto animate-fade-in-up"
      >
        <p className="text-lg font-medium">© {new Date().getFullYear()} My Blog | Made with 💖 and ✨</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

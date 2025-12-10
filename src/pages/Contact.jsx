export default function Contact() {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-10">
      <div
        className="bg-white p-10 rounded-3xl shadow-2xl max-w-2xl w-full border-4 border-green-300 animate-fade-in-up"
      >
        <h1 className="text-5xl font-black text-green-600 mb-8 text-center">Get in Touch! 📬</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-xl">Name</label>
            <input type="text" className="w-full p-4 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 transition-colors text-lg" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-xl">Email</label>
            <input type="email" className="w-full p-4 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 transition-colors text-lg" placeholder="your@email.com" />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-xl">Message</label>
            <textarea className="w-full p-4 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 transition-colors h-40 text-lg" placeholder="Say hello!"></textarea>
          </div>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg text-xl transform transition hover:scale-105">
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
}

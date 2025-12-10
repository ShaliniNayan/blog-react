import aboutMeImg from "../assets/about_me.png";

export default function About() {
  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center p-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl">
        <div
          className="md:w-1/2 p-0 animate-fade-in-left"
        >
          <img src={aboutMeImg} alt="About Me" className="w-full h-full object-cover" />
        </div>

        <div
          className="md:w-1/2 p-12 animate-fade-in-right"
        >
          <h1 className="text-5xl font-black text-purple-600 mb-6">Hello! 👋</h1>
          <h2 className="text-2xl font-bold text-gray-700 mb-6">I'm the creator behind this colorful world.</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            I'm a passionate blogger who loves sharing ideas about art, tech, and life.
            My goal is to make the web a more vivid and fun place, one post at a time!
          </p>
          <div className="flex space-x-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">🎨</div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">💻</div>
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl">✨</div>
          </div>
        </div>
      </div>
    </div>
  );
}

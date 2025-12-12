import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

export default function CreatePost() {
    const { addPost } = useBlog();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        excerpt: '',
        content: '',
        image: 'https://via.placeholder.com/400x300?text=New+Post' // Default placeholder
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(formData);
        navigate('/blog');
    };

    return (
        <div className="min-h-screen bg-purple-50 flex items-center justify-center p-10">
            <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-3xl w-full border-4 border-purple-300 animate-fade-in-up">
                <h1 className="text-4xl font-black text-purple-600 mb-8 text-center">Write a New Story ✍️</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2 text-xl">Title</label>
                        <input
                            type="text"
                            required
                            className="w-full p-4 border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-lg"
                            placeholder="Once upon a time..."
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2 text-xl">Category</label>
                        <select
                            className="w-full p-4 border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-lg bg-white"
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        >
                            <option value="">Select a Category</option>
                            <option value="Diary">Diary 📔</option>
                            <option value="Adventure">Adventure ⚔️</option>
                            <option value="Magic">Magic ✨</option>
                            <option value="Life">Life 🌱</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2 text-xl">Short Summary</label>
                        <input
                            type="text"
                            required
                            className="w-full p-4 border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-lg"
                            placeholder="A brief glimpse into the story..."
                            value={formData.excerpt}
                            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2 text-xl">Your Story</label>
                        <textarea
                            required
                            className="w-full p-4 border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors h-60 text-lg"
                            placeholder="Start writing here..."
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        ></textarea>
                    </div>

                    <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 rounded-xl shadow-lg text-xl transform transition hover:scale-105">
                        Publish Story 🚀
                    </button>
                </form>
            </div>
        </div>
    );
}

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Signup() {
    const [username, setUsername] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username);
        navigate('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-blue-400 via-teal-500 to-green-500 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md border-4 border-orange-300"
            >
                <h2 className="text-4xl font-black text-center text-teal-600 mb-6 drop-shadow-sm">Join the Fun!</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Choose a Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-4 rounded-xl border-2 border-teal-200 focus:border-teal-500 focus:outline-none transition-colors bg-teal-50 text-lg"
                            placeholder="Your awesome handle"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full p-4 rounded-xl border-2 border-teal-200 focus:border-teal-500 focus:outline-none transition-colors bg-teal-50 text-lg"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full p-4 rounded-xl border-2 border-teal-200 focus:border-teal-500 focus:outline-none transition-colors bg-teal-50 text-lg"
                            placeholder="Pick a strong one!"
                            required
                        />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-teal-500 to-green-500 text-white font-bold rounded-xl shadow-lg text-xl hover:shadow-xl transition-all"
                    >
                        Sign Up ✨
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
}

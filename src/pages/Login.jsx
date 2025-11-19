import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Login() {
    const [username, setUsername] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username);
        navigate('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md border-4 border-yellow-300"
            >
                <h2 className="text-4xl font-black text-center text-purple-600 mb-6 drop-shadow-sm">Welcome Back!</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-4 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors bg-purple-50 text-lg"
                            placeholder="Enter your cool name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full p-4 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors bg-purple-50 text-lg"
                            placeholder="Shhh... it's a secret"
                            required
                        />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg text-xl hover:shadow-xl transition-all"
                    >
                        Log In 🚀
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
}

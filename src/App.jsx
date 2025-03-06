import { useEffect, useState } from "react";
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white p-10">
      <h1 className="text-5xl font-bold text-center animate-pulse">
        Welcome to My Blog
      </h1>
      <p className="mt-4 text-center text-lg">A space for art, thoughts, and creativity.</p>
    </div>
  );
}

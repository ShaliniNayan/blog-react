import { createContext, useState, useContext } from 'react';
import blogArtImg from "../assets/blog_art.png";
import blogTechImg from "../assets/blog_tech.png";

const BlogContext = createContext();

export function useBlog() {
    return useContext(BlogContext);
}

export function BlogProvider({ children }) {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "The Beauty of Art",
            excerpt: "Exploring the world of art through colors and shapes...",
            content: "Art is a diverse range of human activity, and resulting product, that involves creative or imaginative talent expressive of technical proficiency, beauty, emotional power, or conceptual ideas.",
            image: blogArtImg,
            category: "Art",
            date: "2023-10-01"
        },
        {
            id: 2,
            title: "Future Tech Trends",
            excerpt: "Robots, AI, and the future of our digital lives...",
            content: "Technology is the application of conceptual knowledge for achieving practical goals, especially in a reproducible way.",
            image: blogTechImg,
            category: "Tech",
            date: "2023-10-05"
        },
    ]);

    const addPost = (newPost) => {
        setPosts((prevPosts) => [
            { ...newPost, id: Date.now(), date: new Date().toLocaleDateString() },
            ...prevPosts,
        ]);
    };

    return (
        <BlogContext.Provider value={{ posts, addPost }}>
            {children}
        </BlogContext.Provider>
    );
}

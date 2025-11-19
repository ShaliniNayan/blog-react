import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

console.log("DEBUG: main.jsx is running!");

const root = createRoot(document.getElementById('root'));
root.render(<h1>Minimal React Test</h1>);

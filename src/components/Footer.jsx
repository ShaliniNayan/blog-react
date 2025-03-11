import './index.css';

export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white p-4 text-center mt-10">
        © {new Date().getFullYear()} My Blog | All Rights Reserved
      </footer>
    );
  }
  
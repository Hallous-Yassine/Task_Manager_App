// Header.js
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-2xl font-bold">
          <Link to="/">Manager.io</Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>

        {/* Login Button */}
        <Link to="/login">
          <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
}

// Footer.js
export default function Footer() {
    return (
      <footer className="w-full bg-gray-800 text-white py-4 bottom-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo or Title */}
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl font-bold">Manager.io</h2>
            </div>
  
            {/* Links */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="/" className="hover:underline">Home</a>
              <a href="/about" className="hover:underline">About Us</a>
              <a href="/services" className="hover:underline">Services</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </div>
  
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="text-center mt-4 text-gray-400">
            &copy; {new Date().getFullYear()} Manager.io. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  
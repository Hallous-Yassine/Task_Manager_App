import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
export default function Home() {
  return (
    <div>
      <Header/>
    <div className="min-h-screen flex flex-col justify-center items-center text-gray-800">
      {/* Centered content */}
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Manager.io</h1>
        <p className="text-lg mb-6 max-w-md mx-auto">
          Manage your projects, streamline your workflow, and stay organized with Manager.io.
        </p>
        <Link to="/signup">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Join
        </button>
        </Link>
        
      </div>
    </div>
    <Footer/>
    </div>
  );
}

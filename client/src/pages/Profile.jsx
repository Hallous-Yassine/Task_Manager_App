import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Profile() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would usually send this data to your backend
    console.log('Updated Data:', { username, email, password });
  };

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-800 text-white h-screen p-4">
        <h2 className="text-2xl font-bold mb-8">Sidebar</h2>
        <ul>
          <Link to="/main">
          <li className="mb-4"><a className="hover:underline">Home</a></li>
          </Link>
          <Link to="/main">
          <li className="mb-4"><a className="hover:underline">Projects</a></li>
          </Link>
          <Link to="/profile">
          <li className="mb-4"><a className="hover:underline">Profile Settings</a></li>
          </Link>
        </ul>
      </div>

      <div className="w-3/4 p-8">
        <h2 className="text-3xl font-bold mb-6">Profile Settings</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex justify-center mt-4">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

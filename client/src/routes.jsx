import { Routes, Route ,Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Main from './pages/Main';
import Profile from './pages/Profile';

export default function AppRoutes({ isAuthenticated, onLoginSuccess, onSignUpSuccess }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login onLoginSuccess={onLoginSuccess} />} />
      <Route path="/signup" element={<SignUp onSignUpSuccess={onSignUpSuccess} />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/main" element={isAuthenticated ? <Main /> : <Navigate to="/login" />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

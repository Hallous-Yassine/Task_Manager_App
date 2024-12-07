import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleSignUpSuccess = () => {
    setIsAuthenticated(true); // Mark user as authenticated after sign-up
  };

  return (
    <Router>
      <Routes
        isAuthenticated={isAuthenticated}
        onLoginSuccess={handleLoginSuccess}
        onSignUpSuccess={handleSignUpSuccess}
      />
    </Router>
  );
}

export default App;

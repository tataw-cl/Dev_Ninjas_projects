import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GeneralView } from './frontend/components/GeneralView/GeneralView.jsx';
import { UserView } from './frontend/components/userView/userView.jsx';
import LogIn from './frontend/components/LogIn/logIn.jsx';
import { SignUp } from './frontend/components/SignUp/signUp.jsx';
import { UserProvider } from './context/userContext.jsx'; // Import the UserProvider

function App() {
  return (
    <UserProvider> {/* Wrap the Router with UserProvider */}
          <Router>
        <Routes>
          <Route path="/" element={<GeneralView />} />
          <Route path="/user" element={<UserView />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/logIn" element={<LogIn />} />
        </Routes>
      </Router>
    </UserProvider>

  );
}

export default App;

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { GeneralView } from './frontend/components/GeneralView/GeneralView.jsx';
// import { GeneralView } from './frontend/components/GeneralView/GeneralView.jsx';
import { UserView } from './frontend/components/userView/userView.jsx';
import LogIn from './frontend/components/LogIn/logIn.jsx';
import { SignUp } from './frontend/components/SignUp/signUp.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GeneralView />} />
        <Route path="/user" element={<UserView />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<LogIn />} />
      </Routes>
    </Router>    // <div className="App">
    //   <UserView />
    // </div>
  );
}

export default App;

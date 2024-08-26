import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';
import { GeneralView } from './frontend/components/GeneralView/GeneralView.jsx';
// import { GeneralView } from './frontend/components/GeneralView/GeneralView.jsx';
import { UserView } from './frontend/components/userView/userView.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GeneralView />} />
        <Route path="/user" element={<UserView />} />
        <Route path="/signUp" element={<UserView />} />
        <Route path="/logIn" element={<UserView />} />
      </Routes>
    </Router>    // <div className="App">
    //   <UserView />
    // </div>
  );
}

export default App;

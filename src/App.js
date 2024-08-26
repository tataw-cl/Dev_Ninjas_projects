import './App.css';
import React from 'react';
// import {Content} from './frontend/components/content/Content.jsx';
import {Section} from './frontend/components/sections/Section.jsx';
import { Section2 } from './frontend/components/sections/section2.jsx';
import { Navbar } from './frontend/components/Navbar/Navbar.jsx';
import { Searchbar } from './frontend/components/searchbar/searchbar.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Section SectionName={"Recommendations"}/>
      <Section2 SectionName={"Popular"} />
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
// import {Content} from './frontend/components/content/Content.jsx';
import {Section} from './frontend/components/sections/Section.jsx';
import { Section2 } from './frontend/components/sections/section2.jsx';

function App() {
  return (
    <div className="App">
      <Section SectionName={"Recommendations"}/>
      <Section2 SectionName={"Popular"} />
    </div>
  );
}

export default App;

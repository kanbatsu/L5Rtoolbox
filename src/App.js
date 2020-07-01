import React from 'react';
import './tailwind.css';
import './plus.css'
import MainContainers from "./containers/Main";

function App() {
  return (
    <div className="App relative" style={{'height': '100vh'}}>
      <MainContainers/>
    </div>
  );
}

export default App;

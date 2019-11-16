import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact
        name="Anita Suton"
        avatar="https://randomuser.me/api/portraits/women/72.jpg"
        status="true"
      />
      <Contact
          name="Jim George"
          avatar="https://randomuser.me/api/portraits/men/72.jpg"
          status="false"
      />
      <Contact
          name="Charlotte Ryan"
          avatar="https://randomuser.me/api/portraits/women/35.jpg"
          status="true"
      />
    </div>
  );
}

export default App;

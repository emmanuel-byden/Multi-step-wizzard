import React from 'react';
import Navbar from './components/Navbar'; // Import the Navbar component
import WizardForm from './components/WizardForm'; // Import the WizardForm component
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <WizardForm />
    </div>
  );
}

export default App;

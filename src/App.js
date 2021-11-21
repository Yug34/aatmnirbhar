import './App.css';
import { useState } from 'react';
import ProfSite from './Components/ProfessorSite';
import GoodSite from './Components/ActuallyGoodSite';

// Switches between two states of the website
// Professional and good looking one, vs one how professors make it.

function App() {
  const [switchSite, setSwitchSite] = useState(false);

  return (
    <div className="App">
      {switchSite ? <GoodSite switchSite={setSwitchSite} /> : <ProfSite switchSite={setSwitchSite} />}
    </div>
  );
}

export default App;

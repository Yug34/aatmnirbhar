import './App.css';
import './Stylesheets/Prof.css';
import { useState } from 'react';
import ProfSite from './Components/ProfessorSite';
import GoodSite from './Components/ActuallyGoodSite';

function App() {
  const [switchSite, setSwitchSite] = useState(false);

  return (
    <div className="App">
      {switchSite ? <GoodSite switchSite={setSwitchSite} /> : <ProfSite switchSite={setSwitchSite} />}
    </div>
  );
}

export default App;

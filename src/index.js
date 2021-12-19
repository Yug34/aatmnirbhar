import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JoinUsProf from './Components/Pages/JoinUsProf';
import PeopleProf from './Components/Pages/PeopleProf';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={window.location.pathname || ''}>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="joinUsProf" element={<JoinUsProf />} />
        <Route path="peopleProf" element={<PeopleProf />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
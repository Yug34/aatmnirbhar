import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JoinUsProf from './Components/JoinUsProf';
import PeopleProf from './Components/PeopleProf';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="joinUsProf" element={<JoinUsProf />} />
        <Route path="peopleProf" element={<PeopleProf />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
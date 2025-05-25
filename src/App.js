import React from 'react'; 
import { grey } from '@mui/material/colors'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Fbi from './components/fbi';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Fbi />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

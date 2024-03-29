import './App.css';
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from './components/navbar'
import Addbook from './components/addbook'
import Showbook from './components/showbook'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Viewbook from './Viewbook';

function App() {
  const [bookid, setBookid] = useState("")
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/add' element={<Addbook/>} ></Route>
        <Route exact path='/' element={<Showbook/>} ></Route>
        <Route exact path='/view/:id' element={<Viewbook/>} ></Route>
      </Routes>

    </Router>
      </>
  );
}

export default App;

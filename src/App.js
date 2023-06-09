import './App.css';
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from './components/navbar'
import Addbook from './components/addbook'
import Showbook from './components/showbook'
import Bookinfo from './components/bookinfo'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [bookid, setBookid] = useState("")
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/add' element={<Addbook/>} ></Route>
        <Route exact path='/' element={<Showbook/>} bookid={bookid} setBookid={setBookid} ></Route>
        <Route exact path='/id' bookid={bookid} setBookid={setBookid}  element={<Bookinfo/>}></Route>
      </Routes>

    </Router>
      </>
  );
}

export default App;

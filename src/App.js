import React from 'react';
import './App.css';
import Home from './router/home/Home';
import About from './router/about/About';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Contact from './router/contact/Contact';
import Footer from './components/footer/Footer';
import Login from './router/login/Login';
import SingleRoute from './router/single-route/SingleRoute';
import NotFound from './router/not-found/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* /product --> path */}
        {/* /:id --> params */}
        <Route path='/product/:id' element={<SingleRoute/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

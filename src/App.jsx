import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Cars from './components/Cars/Cars';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BookTestDrive from './components/BookTestDrive/BookTestDrive';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cars" element={<Cars/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/book-test-drive" element={<BookTestDrive/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
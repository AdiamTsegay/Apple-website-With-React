import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';


import Iphone from './Components/Pages/Iphone';
import Mac from './Components/Pages/Mac';
import Ipad from './Components/Pages/Ipad';
import Watch from './Components/Pages/Watch';
import TV from './Components/Pages/TV';
import Music from './Components/Pages/Music';
import Support from './Components/Pages/Support';
import Cart from './Components/Pages/Cart';
import Search from './Components/Pages/Search';
import Four04 from './Components/Pages/Four04';
import ProductPage from './Components/Pages/ProductPage';
import React from 'react';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        
        <Route path="/Mac" element={<Mac />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/music" element={<Music />} />
        <Route path="/support" element={<Support />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
       <Route path="/iphone/:productId" element={<ProductPage/>} />
        <Route path="*" element={<Four04 />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App


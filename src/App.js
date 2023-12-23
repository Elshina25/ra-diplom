import React from 'react';
import { HashRouter as Router , Route, Routes } from "react-router-dom";

import Layout from './components/LayOut';
import Home from './pages/Home';
import PageCatalog from './pages/PageCatalog';
import About from './pages/About';
import Contacts from './pages/Contacts';
import PageCart from './pages/PageCart';
import Page404 from './pages/Page404';

import './App.css';
import PageItem from './pages/PageItem';

function App() {
  return (
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<PageCatalog />} />
            <Route path='/catalog/:id' element={<PageItem />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/cart' element={<PageCart />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
      </Router>
  );
}

export default App;

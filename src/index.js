import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './components/ScrollToTop.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>

      <Route path='/' element={<Layout />}>
        <Route index element={<Navigate to='/portfolio'/>} />
        <Route path='/portfolio' element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="*" element={<NotFoundPage />}/>


      </Route>

      </Routes>
    </BrowserRouter>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
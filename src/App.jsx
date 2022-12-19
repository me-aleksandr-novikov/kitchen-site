import './reset.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import ServicePage from './Pages/ServicePage/ServicePage';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import AppHeader from './components/AppHeader/AppHeader';

const App = () => {
    return (
        <Router>
            <div className="App">
                <AppHeader/>
                <Routes>
                    <Route exact path='/' element={< HomePage />}></Route>
                    <Route exact path='/about' element={< AboutPage />}></Route>
                    <Route exact path='/contact' element={<ContactPage />}></Route>
                    <Route exact path='/products' element={<ProductsPage />}></Route>
                    <Route exact path='/services' element={<ServicePage />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
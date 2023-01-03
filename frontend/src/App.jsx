import './reset.css';
import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import ServicePage from './Pages/ServicePage/ServicePage';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import FormCard from './components/FormCard/FormCard';
import axios from 'axios';

const App = () => {
    const [ProdItems, setProdItems] = useState([]);
    const [ServiceItems, setServiceItems] = useState([]);
        
    axios.get('http://localhost:4000/api/products')
    .then( (response) => {
        setProdItems(response.data.map((e) => (<FormCard path = {'productCards/imgs/'} props = {e} key = {e.key} />))); 
    })

    axios.get('http://localhost:4000/api/service')
    .then( (response) => {
        setServiceItems(response.data.map((e) => (<FormCard path = {'serviceCards/imgs/'} props = {e} key = {e.key} />))); 
    });

    return (
        <Router>
            <div className="App">
            <FormControl fullWidth>
                <AppHeader />
                    <Routes>
                        <Route exact path='/' element={< HomePage />}></Route>
                        <Route exact path='/about' element={< AboutPage />}></Route>
                        <Route exact path='/contact' element={<ContactPage />}></Route>
                        <Route exact path='/products' element={<ProductsPage items = {ProdItems} />}></Route>
                        <Route exact path='/services' element={<ServicePage items = {ServiceItems}/>}></Route>
                    </Routes>
                <AppFooter/>
            </FormControl>
            </div>
        </Router>
    );
}

export default App;
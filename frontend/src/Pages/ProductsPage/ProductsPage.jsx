import React, { useState } from 'react';
import FormCard from '../../components/FormCard/FormCard';
import axios from 'axios';
import './ProductsPage.css';

const ProductsPage = () => {
    const [items, setItems] = useState([]);
        
    axios.get('http://localhost:4000/api/products')
    .then( (response) => {
        setItems(response.data.map((e) => (<FormCard props = {e} key = {e.key} />))); 
    }
    )
    
    return (
        <div  style={{'margin': '80px 10px'}}>
            <div className = 'productCards'>
                {items}
            </div>
            
        </div>)
};

export default ProductsPage;
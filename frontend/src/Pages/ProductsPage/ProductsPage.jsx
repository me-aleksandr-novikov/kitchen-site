import React from 'react';
import './ProductsPage.css';

const ProductsPage = (props) => {

    
    return (
        <div  style={{'margin': '90px 10px', 'textAlign': 'center'}}>
            <h2>Наша мастерская готова предложить товары под заказ</h2>
            <p>Свяжитесь с нами для уточнения материала и габаритов</p>
            <div className = 'productCards'>
                {props.items}
            </div>
            
        </div>)
};

export default ProductsPage;
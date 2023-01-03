import React from 'react';
import './ProductsPage.css';

const ProductsPage = (props) => {


    return (
        <div className='productPage'>
            <h2 className='title'>Наша мастерская готова предложить товары под заказ</h2>
            <p className='subtitle'>Свяжитесь с нами для уточнения материала и габаритов</p>
            <div className='productCards'>
                {
                    (props.items.length === 0) ? <img alt='404notfound' src="https://media.tenor.com/IHdlTRsmcS4AAAAC/404.gif" /> : props.items
                }
            </div>

        </div>)
};

export default ProductsPage;
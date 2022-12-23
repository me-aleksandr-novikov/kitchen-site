import React from 'react';
import './HomePage.css'
import ContactUs from '../../components/ContactUs/ContactUs';

const HomePage = () => {
    return (
        <>
        <div className="first-page">
            <h2 className='first-page__title'>Заказали новую мебель?</h2>
            <h2 className='first-page__subtitle'>Поможем собрать и установить!</h2>
            <ContactUs/>
        </div>
        </>
    );
};

export default HomePage;
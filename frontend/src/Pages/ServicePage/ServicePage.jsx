import React from 'react';
import "./ServicePage.css";

const ServicePage = (props) => {
    return (
        <div className='servicePage'>
            <h2>Каждому клиенту мы готовы предложить помощь</h2>
            <p>Свяжитесь с нами для уточнения материала и габаритов</p>
            <div className='serviceCards'>
                {props.items}
            </div>

        </div>
    );
};

export default ServicePage;
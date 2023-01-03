import React from 'react';
import "./ServicePage.css";

const ServicePage = (props) => {
    return (
        <div className='servicePage'>
            <h2 className='title'>Каждому клиенту мы готовы предложить помощь</h2>
            <p className='subtitle'>Уточнить информацию можете у наших специалистов</p>
            <div className='serviceCards'>
                {
                        (props.items.length === 0)?<img style = {{margin: '0 auto', maxWidth: '60%'}} alt='404notfound' src="https://media.tenor.com/IHdlTRsmcS4AAAAC/404.gif"/>:props.items
                }
            </div>

        </div>
    );
};

export default ServicePage;
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
        <div className="second-page">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam rem fugit explicabo nihil, harum adipisci, error, incidunt libero qui esse natus delectus doloribus illo reprehenderit nulla alias. Perspiciatis, amet voluptates?
            Repellat modi qui quidem sed recusandae eos inventore repellendus, est error numquam temporibus provident harum officiis placeat enim assumenda beatae. Rem, repellendus reiciendis dolorem nemo tempora quos repudiandae provident ea?
            Quis incidunt rem libero eligendi at, iste consequatur quo voluptates reiciendis nihil quos voluptatem expedita? Ipsa, laudantium eligendi? Ipsa quam, odio adipisci autem ex ut aspernatur perspiciatis placeat quaerat maxime!
            Maiores, pariatur magnam repudiandae molestiae libero quos numquam eveniet impedit eius esse reprehenderit assumenda officia similique? Voluptatem possimus mollitia, corporis, expedita velit non amet nemo laborum earum beatae dolore. Vero?
            Praesentium libero voluptas dolore tempora quas dolorum exercitationem voluptatibus repudiandae necessitatibus molestiae tempore hic, assumenda optio modi aut facere blanditiis, minima enim quaerat qui! Soluta, similique quo. Facilis, commodi natus.</p>
        </div>
        </>
    );
};

export default HomePage;
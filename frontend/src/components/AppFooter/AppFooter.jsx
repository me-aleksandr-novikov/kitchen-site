import React from 'react';
import './AppFooter.css';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const AppFooter = () => {
    return (
        <>
            <MDBFooter className='bg-dark text-center text-white'>
                <MDBContainer className='p-4 pb-0'>
                    <section className='mb-4'>
                        <div className="footer__icons">
                            <a href='https://wa.me/+79020777274'><img src="https://img.icons8.com/3d-fluency/94/null/whatsapp.png" alt='whatsappIcon'/></a>
                            <a href='https://wa.me/+79020777274'><img src="https://img.icons8.com/3d-fluency/94/null/instagram-new.png" alt='instagramIcon'/></a>
                            <a href='https://wa.me/+79020777274'><img src="https://img.icons8.com/fluency/96/null/vk-circled.png" alt='vkIcon'/></a>
                            <a href='https://wa.me/+79020777274'><img src="https://img.icons8.com/color/48/null/telegram-app--v1.png" alt='telegramIcon'/></a>
                        </div>
                    </section>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2022 Copyright: 
                    <Link className='text-white' to='/' style={{marginLeft: '5px'}}>
                        MebelService.ru
                    </Link>
                </div>
            </MDBFooter>
        </>
    );
};

export default AppFooter;
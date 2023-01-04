import React from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import { Paper } from '@mui/material';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Zoom, Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './HomePage.css';

const HomePage = () => {

    function importAll(r) {
        return r.keys().map(r);
    }

    const images = importAll(require.context('../../assets/kitchens', false, /\.(png|jpe?g|svg)$/));
    const sliderImgs = [];


    images.forEach(element => {
        sliderImgs.push(
            <SwiperSlide key={element}>
                <div className="swiper-zoom-container">
                    <img className='slider__img' alt='' src={element} />
                </div>
            </SwiperSlide>
        );
    });

    return (
        <>
            <div className="preview">
                <h2 className='preview__title'>Заказали новую мебель?</h2>
                <h2 className='preview__subtitle'>Поможем собрать и установить!</h2>
                <ContactUs />
            </div>
            <div className="slider">
                <Paper 
                    sx={{bgcolor: 'lightyellow'}}
                    className='slider__paper'
                    elevation={24}>
                    <h2 className='slider__title'>Наши работы</h2>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        keyboard={{
                            enabled: true,
                        }}
                        slidesPerView={"auto"}
                        autoHeight={true}
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        
                        zoom={true}
                        modules={[Keyboard, Zoom, Autoplay, Navigation]}
                        className="mySwiper"
                    >
                        {sliderImgs}
                    </Swiper>
                </Paper>
            </div>
            <div className="partners">
                <Paper sx={{bgcolor: 'lightyellow'}} className='partners__paper' elevation={24}>
                    <div className="partners__title">С нами сотрудничают</div>
                    <div className="partners__icons">
                        <img alt='appleico' src="https://img.icons8.com/3d-fluency/94/null/mac-os.png" />
                        <img alt='chromeico' src="https://img.icons8.com/3d-fluency/94/null/chrome.png" />
                        <img alt='appleico' src="https://img.icons8.com/3d-fluency/94/null/mac-os.png" />
                        <img alt='chromeico' src="https://img.icons8.com/3d-fluency/94/null/chrome.png" />
                        <img alt='appleico' src="https://img.icons8.com/3d-fluency/94/null/mac-os.png" />
                        <img alt='chromeico' src="https://img.icons8.com/3d-fluency/94/null/chrome.png" />
                        <img alt='appleico' src="https://img.icons8.com/3d-fluency/94/null/mac-os.png" />
                        <img alt='chromeico' src="https://img.icons8.com/3d-fluency/94/null/chrome.png" />
                        <img alt='appleico' src="https://img.icons8.com/3d-fluency/94/null/mac-os.png" />
                        <img alt='chromeico' src="https://img.icons8.com/3d-fluency/94/null/chrome.png" />
                    </div>
                </Paper>
            </div>
        </>
    );
};

export default HomePage;
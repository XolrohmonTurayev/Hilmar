import React, { useState, useEffect, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

import "./style.css";

const PhotoSwiper = ({ photo, toggle }) => {
    const [slideShow, setSlideShow] = useState(false);
    const swiperRef = useRef(null);

    function slideShowHandle() {
        setSlideShow((prev) => !prev);
    };

    useEffect(() => {
        if (swiperRef.current) {
            if (slideShow) {
                swiperRef.current.swiper.autoplay.start();
            } else {
                swiperRef.current.swiper.autoplay.stop();
            }
        }
    }, [slideShow]);

    return (
        <div className='photo-swiper-bg'>
            <div className='photo-swiper-btns'>
                <button onClick={slideShowHandle}>
                    <i className={`${slideShow ? "fa-solid fa-pause" : "fa-solid fa-play"}`}></i>
                </button>
                <button onClick={toggle}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div className="photo-swiper-container">
                <Swiper
                    ref={swiperRef}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="mySwiper photo-swiper"
                >
                    {
                        Array(5).fill("").map((index) => (
                            <SwiperSlide key={index} className='content'>
                                <div className='photo-slide-img-wrapper'>
                                    <img src={photo} alt="Photo Slide" />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default PhotoSwiper;

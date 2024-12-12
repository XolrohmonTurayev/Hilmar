import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';
import "./responsive.css";

import bannerSectionHeroImg1 from "../../../assets/images/HomePageImg/bannerSectionHeroImg1.jpg"
import bannerSectionHeroImg2 from "../../../assets/images/HomePageImg/bannerSectionHeroImg2.jpg"
import bannerSectionHeroImg3 from "../../../assets/images/HomePageImg/bannerSectionHeroImg3.jpg"
import bannerSectionHeroImg4 from "../../../assets/images/HomePageImg/bannerSectionHeroImg4.jpg"
import herosectionimg from "../../../assets/images/hero-section-img.svg";
import { useTranslation } from 'react-i18next';

function Banner() {
    const { t } = useTranslation();

    const swiperData = [
        {
            id: 0,
            img: bannerSectionHeroImg1,
        },
        {
            id: 1,
            img: bannerSectionHeroImg2,
        },
        {
            id: 2,
            img: bannerSectionHeroImg3,
        },
        {
            id: 3,
            img: bannerSectionHeroImg4,
        },
    ];
    return (
        <>
            <div className='hero-section-wrapper'>
                <Swiper
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={true}
                    loop={true}
                    className="mySwiper hero-swiper"
                >
                    {swiperData.map((el) => (
                        <div key={el.id} className='overflow-hidden' >
                            <SwiperSlide className='hero-section-slide'>
                                <img src={el.img} className='hero-section-slide_img' />
                            </SwiperSlide>
                        </div>
                    ))}
                </Swiper >
                <div className='banner-info'>
                    <h1>{t("hero-section-title")}</h1>
                    <p>{t("hero-section-text")}</p>
                    <Link to={"/about"}>{t("about_us")}</Link>
                </div>
                <img src={herosectionimg} className='hero-sect-bottom-img' />
            </div >
        </>
    );
}

export default Banner;
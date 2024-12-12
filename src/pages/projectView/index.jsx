import React, { useEffect, useRef, useState } from 'react';
import { Footer, Header, PenSection, PhotoSwiper, SectionTitle } from '../../Components';
import { useLocation, useParams } from 'react-router-dom';
import { homePortfolioData } from '../../constants';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import "./style.css";
import "./responsive.css";

const ProjectViewPage = () => {
  const { t } = useTranslation();
  const { link } = useParams();
  const project = homePortfolioData.find(p => p.link === Number(link));

  if (!project) {
    return <h1 className='project-not-found'>Project not found</h1>;
  }

  let body = document.querySelector("body");
  let bodyWidth = body.getBoundingClientRect().width;
  let spcBtwn = 30;
  if (bodyWidth > 1024) {
    spcBtwn;
  } else {
    spcBtwn = 15;
  };
  const cardRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const footer = footerRef.current;

    const handleScroll = () => {
      if (card && footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop <= 90 && footerTop > 90) {
          card.style.position = "sticky";
          card.style.top = "90px";
        } else if (footerTop <= 90) {
          card.style.position = "absolute";
          card.style.bottom = "0";
        } else {
          card.style.position = "absolute";
          card.style.top = "0";
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const [photoSwiper, setPhotoSwiper] = useState(false);

  function photoSwiperHandle() {
    setPhotoSwiper(!photoSwiper);
  };

  let bodyTag = document.querySelector("body");
  if (photoSwiper == true) {
    bodyTag.style.overflow = "hidden";
  } else {
    bodyTag.style.overflow = "visible";
  }

  return (
    <>
      <Header />
      <main>
        <section className='project-banner-section'>
          <div className="container">
            <div className='banner-img-wrapper'>
              <img src={project.img} alt={project.title} />
            </div>
            <div className='project-title'>
              <h2>"{t(`${project.title}`)}"</h2>
            </div>
          </div>
        </section>
        <section className='project-info-section'>
          <div className="container">
            <div className='projects-info-cont'>
              <section className='project-info-text'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, laborum possimus. Culpa odit eius sed veniam nobis facilis laudantium voluptate distinctio pariatur? Nihil ab quis cum eaque, possimus maxime vel? Dolore nihil reiciendis accusamus eveniet. Magni officiis eveniet sed sequi doloremque necessitatibus dignissimos vero aliquid quos facere, consectetur suscipit. Molestiae, nobis. Harum autem consectetur, nesciunt magni distinctio, illo explicabo corrupti quae voluptatibus deserunt excepturi in sint obcaecati ut voluptatem temporibus.</p><br />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, laborum possimus. Culpa odit eius sed veniam nobis facilis laudantium voluptate distinctio pariatur? Nihil ab quis cum eaque, possimus maxime vel? Dolore nihil reiciendis accusamus eveniet. Magni officiis eveniet sed sequi doloremque necessitatibus dignissimos vero aliquid quos facere, consectetur suscipit. Molestiae, nobis. Harum autem consectetur, nesciunt magni distinctio, illo explicabo corrupti quae voluptatibus deserunt excepturi in sint obcaecati ut voluptatem temporibus.</p><br />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, laborum possimus. Culpa odit eius sed veniam nobis facilis laudantium voluptate distinctio pariatur? Nihil ab quis cum eaque, possimus maxime vel? Dolore nihil reiciendis accusamus eveniet. Magni officiis eveniet sed sequi doloremque necessitatibus dignissimos vero aliquid quos facere, consectetur suscipit. Molestiae, nobis. Harum autem consectetur, nesciunt magni distinctio, illo explicabo corrupti quae voluptatibus deserunt excepturi in sint obcaecati ut voluptatem temporibus.</p><br />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, laborum possimus. Culpa odit eius sed veniam nobis facilis laudantium voluptate distinctio pariatur? Nihil ab quis cum eaque, possimus maxime vel? Dolore nihil reiciendis accusamus eveniet. Magni officiis eveniet sed sequi doloremque necessitatibus dignissimos vero aliquid quos facere, consectetur suscipit. Molestiae, nobis. Harum autem consectetur, nesciunt magni distinctio, illo explicabo corrupti quae voluptatibus deserunt excepturi in sint obcaecati ut voluptatem temporibus.</p><br />
                <div className='project-info-swiper-wrapper'>
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={spcBtwn}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper projects-info_swiper"
                  >
                    {
                      Array(5).fill(project.img).map(el => (
                        <SwiperSlide onClick={photoSwiperHandle}>
                          <img src={el} alt="" />
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>
                </div>
                <div className={`${photoSwiper ? "" : "hidden"}`}>
                  <PhotoSwiper photo={project.img} toggle={photoSwiperHandle} />
                </div>
              </section>
              <aside className='projects-floating-card-wrapper'>
                <div className={`projects-floating-card`} ref={cardRef}>
                  <div>
                    <span>Qurilish yillari</span>
                    <p>2023-2024</p>
                    <span>Asos</span>
                    <p>Gazoblok + Temirbeton</p>
                  </div>
                  <div>
                    <iframe src={project.location}></iframe>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <section ref={footerRef}>
          <div className="container">
            <div className='details-section'>
              <SectionTitle>Other details</SectionTitle>
              <div className='details-container'>
                {/* item 1 */}
                <div className='details-item'>
                  <small>Building area</small>
                  <span>{project.building_area}</span>
                </div>
                {/* item 2 */}
                <div className='details-item'>
                  <small>Levels</small>
                  <span>{project.levels}</span>
                </div>
                {/* item 3 */}
                <div className='details-item'>
                  <small>Area on HA</small>
                  <span>{project.area_on_GA}</span>
                </div>
                {/* item 4 */}
                <div className='details-item'>
                  <small>Buildings</small>
                  <span>{project.buildings}</span>
                </div>
                {/* item 5 */}
                <div className='details-item'>
                  <small>Apartments</small>
                  <span>{project.apartment}</span>
                </div>
                {/* item 6 */}
                <div className='details-item'>
                  <small>Parking</small>
                  <span>{project.parking ? "+" : "-"}</span>
                </div>
                {/* item 7 */}
                <div className='details-item'>
                  <small>Underground parking</small>
                  <span>{project.undergroundParking ? "+" : "-"}</span>
                </div>
                {/* item 8 */}
                <div className='details-item'>
                  <small>Building area</small>
                  <span>{project.kidsGarden ? "+" : "-"}</span>
                </div>
                {/* item 9 */}
                <div className='details-item'>
                  <small>Building area</small>
                  <span>{project.separateArea ? "+" : "-"}</span>
                </div>
                {/* item 10 */}
                <div className='details-item'>
                  <small>Building area</small>
                  <span>{project.securedZone ? "+" : "-"}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PenSection />
      </main>
      <Footer />

    </>
  )
}

export default ProjectViewPage

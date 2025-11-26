import css from "./Services.module.css";
import { servicesData } from "../../data/services";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
const Services = () => {
  return (
    <section id="services">
      <div className={css.services}>
        <div className={css.services__wrapper}>
          <div className="containerSlider">
            <h3 className={css.services__title}>
              Professional & Loving Care for Every Pet
            </h3>
            <p className={css.about__paragraf}>
              Below are my core services — and if your pet has special needs,
              I`m always happy to adapt.
            </p>
            <Swiper
              modules={[Mousewheel]}
              mousewheel={true}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1.2,
                  spaceBetween: 10,
                },
                550: {
                  slidesPerView: 2.2,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 25,
                },
                1440: {
                  slidesPerView: 4.5,
                  spaceBetween: 30,
                },
              }}
              className={`${css.swiper} ${css.about__slider}`}
            >
              {servicesData.map((item) => (
                <SwiperSlide className={css.aboutItem} key={item.id}>
                  <div className={css.aboutImageContainer}>
                    <div className={css.aboutBackground}>
                      <img src={item.background} alt="icon" />
                    </div>
                    <div className={css.aboutIcon}>
                      <img src={item.icon} alt="iconMain" />
                    </div>
                  </div>
                  <h4 className={css.aboutItemContent}>{item.title}</h4>
                  <p className={css.aboutItemDescription}>{item.description}</p>
                  <p className={css.aboutItemDescription}>
                    {" "}
                    <b>{item.price}</b>
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

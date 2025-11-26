import css from "./Feedback.module.css";
import { feedbacks } from "../../data/feedback";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";
const Feedback = () => {
  return (
    <section id="feedback">
      <div className={css.feedback}>
        <div className={css.feedbackrWrapper}>
          <div className="containerSlider">
            <h2 className={css.feedbackTitle}>Client`s Feedback</h2>
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                550: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 10,
                },
                991: {
                  slidesPerView: 2.5,
                  spaceBetween: 15,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
              }}
              modules={[Autoplay]}
              slidesPerView={3}
              spaceBetween={15}
              loop={true}
              className={`${css.swiper} ${css.feedbackSlider}`}
            >
              {feedbacks.map((item) => (
                <SwiperSlide className={css.feedbackItem} key={item.id}>
                  <div className={css.feedbackItemCover}>
                    <div className={css.feedbackText}>“{item.review}“</div>
                    <div className={css.feedbackName}>{item.name}</div>
                    <p className={css.feedbackLocation}>{item.location}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;

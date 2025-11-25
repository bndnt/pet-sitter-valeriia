import css from "./AmoutMe.module.css";
import Valeriia from "../../../public/valeriia.png";
import Bg from "../../../public/bg-about.svg";

const AmoutMe = () => {
  return (
    <section id="about">
      <div className={css.about}>
        <div className={css.about__wrapper}>
          <div className="container">
            <div className={css.about__flex}>
              <div className={css.about__info}>
                <h1 className={css.about__title}>
                  Your Pet Stays <br />
                  Safe & Happy
                </h1>
                <div className={css.about__text}>
                  <p>
                    Hi! My name is <b>Valeriia</b> and I`m a dedicated pet
                    sitter based in Montreal, living in the Rosemont–La
                    Petite-Patrie area. I truly love animals of all shapes and
                    sizes. Whether it`s a shy rescue cat, a playful puppy, or a
                    chatty parrot, I always take the time to earn their trust
                    and make them feel secure.
                  </p>
                  <p>
                    I have <b>over 4 years of experience</b> caring for pets in
                    different homes, providing a calm, patient, and positive
                    environment. I focus on comfort, safety, and individual
                    attention, adapting to each pet’s unique personality and
                    needs.
                  </p>
                  <p>
                    Your little one will be treated like my own — with kindness,
                    affection, and reliable daily care.
                  </p>
                </div>
              </div>
              <div className={css.about__image}>
                <div className={css.about__person}>
                  <img src={Valeriia} alt="Valeriia Makushchenko" />
                </div>
                {/* <div className={css.about__bg}>
                    <img src={Bg} alt="bg" />
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmoutMe;

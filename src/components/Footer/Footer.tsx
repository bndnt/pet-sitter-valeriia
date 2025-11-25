import css from "./Footer.module.css";
import facebook from "../../../public/facebook.svg";
import inst from "../../../public/inst.svg";
import footerpaws from "../../../public/footerpaws.svg";
const Footer = () => {
  return (
    <footer id="footer" className={css.footer}>
      <div className={css.footerWrapper}>
        <div className="container">
          <img className={css.footerImage} src={footerpaws} alt="img" />
          <div className={css.footerFlex}>
            <div className={css.footerSoc}>
              <a className={css.footerSocIcon} target="_blank">
                <img src={facebook} alt="icon" />
              </a>
              <a className={css.footerSocIcon} target="_blank">
                <img src={inst} alt="icon" />
              </a>
            </div>
            <div className={css.footerInfo}>
              <a href="tel:+14384964197" className={css.foterInfoLink}>
                +1 438 496 4197
              </a>
              <a
                href="mailto:l.makushchenko@gmail.com"
                className={css.foterInfoLink}
              >
                l.makushchenko@gmail.com
              </a>
              <a
                className={css.foterInfoLink}
                target="_blank"
                href="https://maps.app.goo.gl/C8JyQthn9L9ULWmH8"
              >
                6240 31e Avenue 4, Montréal, QC, H1T 3E3, Canada
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

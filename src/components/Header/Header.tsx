import css from "./Header.module.css";
import Logo from "../../../public/icon.svg";
const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.header__wrapper}>
        <div className="container">
          <div className={css.header__flex}>
            <div className={css.logo}>
              <a href="/">
                <img src={Logo} alt="logo" />
                <span>PetSit</span>
              </a>
            </div>
            <nav className={css.header__nav}>
              <ul className="header__list">
                <li>
                  <a href="#about">About me</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#feedback">Reviews</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="#footer">Contact me</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

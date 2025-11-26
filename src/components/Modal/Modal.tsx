import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import { useEffect, useState } from "react";
import clsx from "clsx";
const Modal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleOpenModal = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // блокируем скролл
    } else {
      document.body.style.overflow = ""; // возвращаем как было
    }

    // Чистим, если компонент размонтируется
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) return null;
  return createPortal(
    <>
      <div
        className={clsx(css.modalAction, isOpen && css.active)}
        onClick={handleOpenModal}
      >
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      {isOpen && (
        <div className={css.modalBackdrop} onClick={handleBackdropClick}>
          <div className={css.modal}>
            <nav className={css.modalNav}>
              <ul className={css.modalUl}>
                <li>
                  <a href="#about" onClick={() => setIsOpen(false)}>
                    About me
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={() => setIsOpen(false)}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#feedback" onClick={() => setIsOpen(false)}>
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="#faq" onClick={() => setIsOpen(false)}>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#footer" onClick={() => setIsOpen(false)}>
                    Contact me
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root") as HTMLDivElement
  );
};

export default Modal;

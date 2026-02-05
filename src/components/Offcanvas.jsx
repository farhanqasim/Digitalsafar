import { Link } from 'react-router-dom';

export default function Offcanvas() {
  return (
    <>
      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link to="/">
                    <img src="/assets/img/logo/logo.png" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button><i className="fas fa-times"></i></button>
                </div>
              </div>
              <h3 className="offcanvas-title">Hello There!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
              <div className="mobile-menu fix mt-3"></div>
              <div className="social-icon d-flex align-items-center">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <div className="offcanvas__contact">
                <h3>Information</h3>
                <ul className="contact-list">
                  <li><span>Address:</span> J3W8+M25 Rawalpindi, Pakistan</li>
                  <li><span>Call Us:</span> <a href="tel:+923226672608">+92 322 6672608</a></li>
                  <li><span>Email:</span> <a href="mailto:digitalsafar929@gmail.com">digitalsafar929@gmail.com</a></li>
                </ul>
              </div>
              <Link to="/contact" className="theme-btn">Get a Quote <i className="far fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay"></div>
    </>
  );
}

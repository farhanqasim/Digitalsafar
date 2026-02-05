import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <section className="footer-section fix bg-cover" style={{ backgroundImage: "url('/assets/img/footer/footer-bg-2.jpg')" }}>
      <div className="container">
        <div className="footer-newsletter-wrapper-2 style-margin">
          <Link to="/" className="footer-logo wow fadeInUp" data-wow-delay=".3s">
            <img src="/assets/img/logo/logo.png" alt="logo" />
          </Link>
          <div className="footer-newsletter-right">
            <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
              <div className="icon"><i className="far fa-bell-exclamation"></i></div>
              <div className="content">
                <h4>Subscribe Newsletter</h4>
                <span>Effective SEO strategies not only elevate.</span>
              </div>
            </div>
            <form action="#">
              <input type="email" id="email12" placeholder="Enter your email" />
              <button className="icon-btn" type="submit"><i className="fas fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
        <div className="footer-widget-wrapper style-2">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div className="single-footer-widget">
                <div className="widget-head"><h3>About Us</h3></div>
                <div className="footer-content">
                  <p>By optimizing content, leveraging relevant keywords, and adhering to best practices, businesses can secure prominent position (SEO)</p>
                  <div className="social-icon">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-dribbble"></i></a>
                    <a href="https://www.instagram.com/digitalsafar929/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="single-footer-widget">
                <div className="widget-head"><h3>Our Services</h3></div>
                <ul className="list-area">
                  <li><Link to="/service/web-development">Web Development</Link></li>
                  <li><Link to="/service/android-app">Android App Development</Link></li>
                  <li><Link to="/service/flutter-app">Flutter App Development</Link></li>
                  <li><Link to="/service/seo-digital-marketing">SEO & Digital Marketing</Link></li>
                  <li><Link to="/service/ui-ux-design">UI/UX Design</Link></li>
                  <li><Link to="/service/website-maintenance">Website Maintenance & Support</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-2 wow fadeInUp" data-wow-delay=".6s">
              <div className="single-footer-widget">
                <div className="widget-head"><h3>Quick Link</h3></div>
                <ul className="footer-contect">
                  <li>
                    <div className="icon"><i className="fas fa-phone-alt"></i></div>
                    <div className="content">
                      <h5>Call Us</h5>
                      <p><a href="tel:+923226672608">+92 322 6672608</a></p>
                    </div>
                  </li>
                  <li>
                    <div className="icon"><i className="fas fa-envelope"></i></div>
                    <div className="content">
                      <h5>Mail Us</h5>
                      <p><a href="mailto:digitalsafar929@gmail.com" className="text-white">digitalsafar929@gmail.com</a></p>
                    </div>
                  </li>
                  <li>
                    <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                    <div className="content">
                      <h5>Our Location</h5>
                      <p className="text-white">J3W8+M25 Rawalpindi, Pakistan</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
              <div className="single-footer-widget">
                <div className="widget-head"><h3>View Map</h3></div>
                <div className="google-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="map"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft" data-wow-delay=".3s">Copyright 2025 Digital Safar. All Rights Reserved.</p>
            <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
              <li><Link to="/contact">Privacy policy.</Link></li>
              <li><Link to="/contact">Terms of use.</Link></li>
              <li><Link to="/contact">Site map.</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section-2 hero-2">
        <div className="plane-shape">
          <img src="/assets/img/hero/plane-shape-2.png" alt="img" />
        </div>
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="char-animation">Your Complete Digital Solutions Partner</h1>
                <p className="hero-text wow fadeInUp" data-wow-delay=".2s">
                  From web and mobile development to SEO, UI/UX design, and ongoing support—Digital Safar delivers end-to-end digital services to grow your business.
                </p>
                <div className="hero-btn wow fadeInUp" data-wow-delay=".4s">
                  <Link to="/contact" className="theme-btn">Get Started <i className="far fa-arrow-right"></i></Link>
                  <Link to="/about" className="theme-btn style-2">Explore More <i className="far fa-arrow-right"></i></Link>
                </div>
                <div className="hero-counter-item">
                  <div className="counter-box wow fadeInUp" data-wow-delay=".6s">
                    <h2><span className="odometer" data-count="23">00</span>+</h2>
                    <p>Year Experience</p>
                  </div>
                  <div className="counter-box wow fadeInUp" data-wow-delay=".8s">
                    <h2><span className="odometer" data-count="498">00</span>+</h2>
                    <p>Project Completed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src="/assets/img/hero/hero-2-img.png" alt="img" className="wow img-custom-anim-right" />
                <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section-2 section-padding fix">
        <div className="plane-shape float-bob-x">
          <img src="/assets/img/about/plane-shape.png" alt="img" />
        </div>
        <div className="vec-shape">
          <img src="/assets/img/about/vector-2.png" alt="img" />
        </div>
        <div className="container">
          <div className="about-wrapper-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-img agn-choose-5-img">
                  <img src="/assets/img/about/about-2-01.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title mb-0 text-start">
                    <span className="wow fadeInUp">Welcome to Digital Safar</span>
                    <h2 className="char-animation">Generating New Customers via Online Mode</h2>
                  </div>
                  <p className="about-text wow fadeInUp" data-wow-delay=".4s">
                    Welcome to Digital Safar your trusted partner for comprehensive SEO and digital marketing solutions with our proven expertise.
                  </p>
                  <div className="icon-box wow fadeInUp" data-wow-delay=".6s">
                    <div className="icon"><i className="flaticon-research"></i></div>
                    <div className="content">
                      <h3>Market Growth Research</h3>
                      <p>Welcome to Digital Safar your trusted partner for comprehensive SEO and digital marketing solutions.</p>
                    </div>
                  </div>
                  <div className="icon-box wow fadeInUp" data-wow-delay=".8s">
                    <div className="icon style-2"><i className="flaticon-online-service"></i></div>
                    <div className="content">
                      <h3>Market Growth Research</h3>
                      <p>Welcome to Digital Safar your trusted partner for comprehensive SEO and digital marketing solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-feature-wrapper-1 section-padding pb-0">
            <div className="about-feature-box wow fadeInUp" data-wow-delay=".3s">
              <div className="about-icon"><i className="flaticon-video-marketing-1"></i></div>
              <div className="about-content">
                <h3>Advanced data Analytics</h3>
                <p>Mauris sem ante, iaculis eget nisl placerat hendrerit. Suspendisse velit for</p>
              </div>
            </div>
            <div className="about-feature-box wow fadeInUp" data-wow-delay=".5s">
              <div className="about-icon style-2"><i className="flaticon-market-analysis"></i></div>
              <div className="about-content">
                <h3>High Performance</h3>
                <p>Mauris sem ante, iaculis eget nisl placerat hendrerit. Suspendisse velit for</p>
              </div>
            </div>
            <div className="about-feature-box wow fadeInUp" data-wow-delay=".7s">
              <div className="about-icon style-3"><i className="flaticon-presentation"></i></div>
              <div className="about-content">
                <h3>Increase Business Growth</h3>
                <p>Mauris sem ante, iaculis eget nisl placerat hendrerit. Suspendisse velit for</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="service-section-2 section-padding fix">
        <div className="left-shape"><img src="/assets/img/service/left-shape.png" alt="img" /></div>
        <div className="right-shape"><img src="/assets/img/service/right-shape-3.png" alt="img" /></div>
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Our Services</span>
            <h2 className="char-animation">Complete Digital Services for<br /> Your Business Growth</h2>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div className="service-icon-box-items-2">
                <div className="icon">
                  <i className="flaticon-seo"></i>
                  <div className="icon-bg"><img src="/assets/img/service/icon-bg-1.png" alt="img" /></div>
                </div>
                <div className="content">
                  <h3><Link to="/service/web-development">Web Development<br /> Services</Link></h3>
                  <p>Business websites, corporate sites, landing pages, and custom web applications built with modern technologies.</p>
                  <Link to="/service/web-development" className="link-btn">Get Started <i className="far fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="service-icon-box-items-2">
                <div className="icon">
                  <i className="flaticon-email-marketing-1"></i>
                  <div className="icon-bg"><img src="/assets/img/service/icon-bg-2.png" alt="img" /></div>
                </div>
                <div className="content">
                  <h3><Link to="/service/android-app">Mobile App<br /> Development</Link></h3>
                  <p>Android, Flutter, and cross-platform apps that deliver great user experiences and business results.</p>
                  <Link to="/service/android-app" className="link-btn">Get Started <i className="far fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
              <div className="service-icon-box-items-2">
                <div className="icon">
                  <i className="flaticon-performance"></i>
                  <div className="icon-bg"><img src="/assets/img/service/icon-bg-3.png" alt="img" /></div>
                </div>
                <div className="content">
                  <h3><Link to="/service/ui-ux-design">UI/UX<br /> Design</Link></h3>
                  <p>User-centered design that makes your products intuitive, accessible, and enjoyable to use.</p>
                  <Link to="/service/ui-ux-design" className="link-btn">Get Started <i className="far fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
              <div className="service-icon-box-items-2">
                <div className="icon">
                  <i className="flaticon-email-marketing"></i>
                  <div className="icon-bg"><img src="/assets/img/service/icon-bg-4.png" alt="img" /></div>
                </div>
                <div className="content">
                  <h3><Link to="/service/seo-digital-marketing">SEO & Digital<br /> Marketing</Link></h3>
                  <p>Search visibility, content strategy, and data-driven campaigns to grow your audience and conversions.</p>
                  <Link to="/service/seo-digital-marketing" className="link-btn">Get Started <i className="far fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="service-icon-box-items-2">
                <div className="icon">
                  <i className="flaticon-seo"></i>
                  <div className="icon-bg"><img src="/assets/img/service/icon-bg-5.png" alt="img" /></div>
                </div>
                <div className="content">
                  <h3><Link to="/service/website-maintenance">Website Maintenance<br /> & Support</Link></h3>
                  <p>Ongoing updates, security, backups, and support so your site stays fast, secure, and up to date.</p>
                  <Link to="/service/website-maintenance" className="link-btn">Get Started <i className="far fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-call-section-5 section-padding bg-cover" style={{ backgroundImage: "url('/assets/img/cta-call.jpg')" }}>
        <div className="container">
          <div className="cta-call-wrapper style-padding">
            <div className="section-title text-center mb-0">
              <span className="text-white wow fadeInUp">No time to wait? Call us</span>
              <h2 className="text-white char-animation">Let's Collaborate With <br /> Our Digital Experts</h2>
            </div>
            <div className="cta-button wow fadeInUp" data-wow-delay=".9s">
              <Link to="/contact" className="theme-btn">Get Started <i className="far fa-arrow-right"></i></Link>
              <Link to="/pricing" className="pricing-text">Pricing Plan <i className="far fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <div className="contact-info-inner">
        <div className="container">
          <div className="contact-info-inner-wrapper">
            <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
              <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
              <div className="content">
                <h3>Our Location</h3>
                <p className="text-white">J3W8+M25 Rawalpindi, Pakistan</p>
              </div>
            </div>
            <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
              <div className="icon"><i className="fas fa-phone-alt"></i></div>
              <div className="content">
                <h3>Call Us</h3>
                <p><a href="tel:+923226672608">+92 322 6672608</a></p>
              </div>
            </div>
            <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
              <div className="icon"><i className="fas fa-envelope"></i></div>
              <div className="content">
                <h3>Email Us</h3>
                <p><a href="mailto:digitalsafar929@gmail.com" className="link">digitalsafar929@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

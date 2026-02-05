import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header-section-2">
      <div id="header-sticky" className="header-1">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <Link to="/" className="header-logo1">
                  <img src="/assets/img/logo/logo.png" alt="logo-img" />
                </Link>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className="has-dropdown">
                          <Link to="/services">Services <i className="fas fa-chevron-down"></i></Link>
                          <ul className="submenu">
                            <li><Link to="/services">All Services</Link></li>
                            <li><Link to="/service/web-development">Web Development</Link></li>
                            <li><Link to="/service/android-app">Android App Development</Link></li>
                            <li><Link to="/service/flutter-app">Flutter App Development</Link></li>
                            <li><Link to="/service/seo-digital-marketing">SEO & Digital Marketing</Link></li>
                            <li><Link to="/service/ui-ux-design">UI/UX Design</Link></li>
                            <li><Link to="/service/website-maintenance">Website Maintenance & Support</Link></li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/portfolio">Portfolio <i className="fas fa-chevron-down"></i></Link>
                          <ul className="submenu">
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/portfolio/1">Portfolio Details</Link></li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <Link to="/about">Pages <i className="fas fa-chevron-down"></i></Link>
                          <ul className="submenu">
                            <li><Link to="/about">About Us</Link></li>
                            <li className="has-dropdown">
                              <Link to="/team">Team <i className="fas fa-angle-right"></i></Link>
                              <ul className="submenu">
                                <li><Link to="/team">Our team</Link></li>
                                <li><Link to="/team/1">Team details</Link></li>
                              </ul>
                            </li>
                            <li><Link to="/pricing">Pricing Plan</Link></li>
                            <li><Link to="/faq">Our Faq</Link></li>
                            <li><Link to="/404">404 Error</Link></li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/blog">Blog <i className="fas fa-chevron-down"></i></Link>
                          <ul className="submenu">
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/blog/1">Blog Details</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/contact">Contact Us</Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="link-btn">
                  Support: <a href="tel:+923226672608">+92 322 6672608</a>
                </div>
                <Link to="/contact" className="theme-btn">
                  Get Started <i className="far fa-arrow-right"></i>
                </Link>
                <div className="header__hamburger d-xl-none my-auto">
                  <div className="sidebar__toggle">
                    <i className="fal fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

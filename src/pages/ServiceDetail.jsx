import { Link, useParams } from 'react-router-dom';

const serviceTitles = {
  'web-development': 'Web Development Services',
  'android-app': 'Android App Development',
  'flutter-app': 'Flutter App Development',
  'seo-digital-marketing': 'SEO & Digital Marketing',
  'ui-ux-design': 'UI/UX Design',
  'website-maintenance': 'Website Maintenance & Support',
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const title = serviceTitles[slug] || 'Service';

  return (
    <>
      <section className="breadcrumb-section fix bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="page-heading">
              <ul className="breadcrumb-list wow fadeInUp" data-wow-delay=".5s">
                <li><Link to="/">Home</Link></li>
                <li><i className="fal fa-long-arrow-right"></i></li>
                <li>{title}</li>
              </ul>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">{title}</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="service-detaile-section section-padding fix">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row">
              <div className="col-lg-8">
                <div className="service-details-content">
                  <div className="service-details-image wow fadeInUp">
                    <img src="/assets/img/service/service-details-01.jpg" alt="" />
                  </div>
                  <h2 className="char-animation">{title}</h2>
                  <p className="mt-2 wow fadeInUp" data-wow-delay=".2s">
                    Digital Safar delivers professional solutions tailored to your business needs. Contact us for a detailed discussion and quote.
                  </p>
                  <Link to="/contact" className="theme-btn mt-4">Contact Us <i className="far fa-arrow-right"></i></Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-details-sidebar">
                  <div className="sidebar-widget">
                    <div className="sideber-title"><h4>Our Services</h4></div>
                    <ul>
                      <li><Link to="/service/web-development"><span>Web Development</span> <span className="icon"><i className="far fa-long-arrow-right"></i></span></Link></li>
                      <li><Link to="/service/android-app"><span>Android App Development</span> <span className="icon"><i className="far fa-long-arrow-right"></i></span></Link></li>
                      <li><Link to="/service/flutter-app"><span>Flutter App Development</span> <span className="icon"><i className="far fa-long-arrow-right"></i></span></Link></li>
                      <li><Link to="/service/seo-digital-marketing"><span>SEO & Digital Marketing</span> <span className="icon"><i className="far fa-long-arrow-right"></i></span></Link></li>
                      <li><Link to="/service/ui-ux-design"><span>UI/UX Design</span> <span className="icon"><i className="far fa-long-arrow-right"></i></span></Link></li>
                      <li><Link to="/service/website-maintenance"><span>Website Maintenance & Support</span> <span className="icon"><i className="far fa-long-arrow-right"></i></span></Link></li>
                    </ul>
                  </div>
                  <div className="sidebar-widget">
                    <div className="sideber-title"><h4>Need Any Help</h4></div>
                    <ul className="contact-info">
                      <li>
                        <div className="icon"><i className="fas fa-phone-alt"></i></div>
                        <div className="content"><h5>Call Us</h5><p><a href="tel:+923226672608">+92 322 6672608</a></p></div>
                      </li>
                      <li>
                        <div className="icon"><i className="fas fa-envelope"></i></div>
                        <div className="content"><h5>Mail Us</h5><p><a href="mailto:digitalsafar929@gmail.com">digitalsafar929@gmail.com</a></p></div>
                      </li>
                      <li>
                        <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                        <div className="content"><h5>Our Location</h5><p>J3W8+M25 Rawalpindi, Pakistan</p></div>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-widget-image wow fadeInUp">
                    <img src="/assets/img/service/service-details-widget01.jpg" alt="" />
                    <div className="content">
                      <h3>Start Your Project?</h3>
                      <p>Get in touch for a free consultation.</p>
                      <Link to="/contact" className="theme-btn">Contact Us <i className="far fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

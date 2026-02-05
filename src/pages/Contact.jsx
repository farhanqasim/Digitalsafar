import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
      <section className="breadcrumb-section fix bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="page-heading">
              <ul className="breadcrumb-list wow fadeInUp" data-wow-delay=".5s">
                <li><Link to="/">Home</Link></li>
                <li><i className="fal fa-long-arrow-right"></i></li>
                <li>Contact Us</li>
              </ul>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">Contact Us</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding fix">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="icon-items">
                <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="content">
                  <h5>Our Location</h5>
                  <p>J3W8+M25 Rawalpindi, Pakistan</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-items">
                <div className="icon"><i className="fas fa-phone-alt"></i></div>
                <div className="content">
                  <h5>Call Us</h5>
                  <p><a href="tel:+923226672608">+92 322 6672608</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-items">
                <div className="icon"><i className="fas fa-envelope"></i></div>
                <div className="content">
                  <h5>Email</h5>
                  <p><a href="mailto:digitalsafar929@gmail.com">digitalsafar929@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-8 mx-auto">
              <form className="contact-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control" placeholder="Your Email" required />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                  <div className="col-12">
                    <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="theme-btn">Send Message <i className="far fa-arrow-right"></i></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

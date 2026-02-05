import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <section className="breadcrumb-section fix bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="page-heading">
              <ul className="breadcrumb-list wow fadeInUp" data-wow-delay=".5s">
                <li><Link to="/">Home</Link></li>
                <li><i className="fal fa-long-arrow-right"></i></li>
                <li>About Us</li>
              </ul>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">About Us</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Welcome to Digital Safar</span>
            <h2 className="char-animation">Your Complete Digital Solutions Partner</h2>
            <p className="mt-3">We deliver web development, mobile apps, UI/UX design, SEO & digital marketing, and website maintenance to grow your business.</p>
          </div>
          <div className="text-center mt-5">
            <Link to="/contact" className="theme-btn">Contact Us <i className="far fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}

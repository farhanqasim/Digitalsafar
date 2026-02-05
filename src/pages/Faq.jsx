import { Link } from 'react-router-dom';

export default function Faq() {
  return (
    <>
      <section className="breadcrumb-section fix bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="page-heading">
              <ul className="breadcrumb-list wow fadeInUp" data-wow-delay=".5s">
                <li><Link to="/">Home</Link></li>
                <li><i className="fal fa-long-arrow-right"></i></li>
                <li>FAQ</li>
              </ul>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">Our FAQ</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">FAQ</span>
            <h2 className="char-animation">Frequently Asked Questions</h2>
          </div>
          <p className="text-center mt-3">Have questions? Contact us for answers.</p>
          <div className="text-center mt-4">
            <Link to="/contact" className="theme-btn">Contact Us <i className="far fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}

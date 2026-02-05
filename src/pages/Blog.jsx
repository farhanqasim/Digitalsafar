import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <>
      <section className="breadcrumb-section fix bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="page-heading">
              <ul className="breadcrumb-list wow fadeInUp" data-wow-delay=".5s">
                <li><Link to="/">Home</Link></li>
                <li><i className="fal fa-long-arrow-right"></i></li>
                <li>Blog</li>
              </ul>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">Blog</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">News & Updates</span>
            <h2 className="char-animation">Latest from Digital Safar</h2>
          </div>
          <p className="text-center mt-3">Blog posts will appear here. Contact us for services.</p>
          <div className="text-center mt-4">
            <Link to="/contact" className="theme-btn">Contact Us <i className="far fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}

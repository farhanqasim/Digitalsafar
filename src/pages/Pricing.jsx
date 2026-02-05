import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <>
      <section className="breadcrumb-section fix bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="page-heading">
              <ul className="breadcrumb-list wow fadeInUp" data-wow-delay=".5s">
                <li><Link to="/">Home</Link></li>
                <li><i className="fal fa-long-arrow-right"></i></li>
                <li>Pricing</li>
              </ul>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">Pricing Plan</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Pricing</span>
            <h2 className="char-animation">Choose a Plan</h2>
            <p className="mt-3">Contact us for custom quotes tailored to your project.</p>
          </div>
          <div className="text-center mt-5">
            <Link to="/contact" className="theme-btn">Get a Quote <i className="far fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <section className="breadcrumb-section fix bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="page-heading">
              <ul className="breadcrumb-list wow fadeInUp" data-wow-delay=".5s">
                <li><Link to="/">Home</Link></li>
                <li><i className="fal fa-long-arrow-right"></i></li>
                <li>404</li>
              </ul>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">Page Not Found</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding fix">
        <div className="container text-center">
          <h1 className="display-1 text-muted">404</h1>
          <p className="lead">The page you are looking for does not exist.</p>
          <Link to="/" className="theme-btn mt-3">Back to Home <i className="far fa-arrow-right"></i></Link>
        </div>
      </section>
    </>
  );
}

import { Link, useParams } from 'react-router-dom';

export default function PortfolioDetail() {
  const { id } = useParams();
  return (
    <>
      <section className="breadcrumb-section fix bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="page-heading">
              <ul className="breadcrumb-list wow fadeInUp" data-wow-delay=".5s">
                <li><Link to="/">Home</Link></li>
                <li><i className="fal fa-long-arrow-right"></i></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><i className="fal fa-long-arrow-right"></i></li>
                <li>Project {id}</li>
              </ul>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">Project Details</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <img src={`/assets/img/project/0${id || 1}.jpg`} alt="" className="img-fluid" />
              <h3 className="mt-4">Project {id}</h3>
              <p>Sample project description. Contact us for your next project.</p>
              <Link to="/contact" className="theme-btn">Get Started <i className="far fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

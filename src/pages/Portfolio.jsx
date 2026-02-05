import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <>
      <section className="breadcrumb-section fix bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="page-heading">
              <ul className="breadcrumb-list wow fadeInUp" data-wow-delay=".5s">
                <li><Link to="/">Home</Link></li>
                <li><i className="fal fa-long-arrow-right"></i></li>
                <li>Portfolio</li>
              </ul>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">Portfolio</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Our Work</span>
            <h2 className="char-animation">Sample Projects</h2>
            <p className="mt-3">Explore our portfolio. Contact us to discuss your project.</p>
          </div>
          <div className="row g-4 mt-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="col-md-4">
                <div className="project-box-items-2">
                  <div className="project-img">
                    <img src={`/assets/img/project/0${i}.jpg`} alt="" />
                  </div>
                  <div className="project-content">
                    <p>PROJECT</p>
                    <h3><Link to={`/portfolio/${i}`}>Project {i}</Link></h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

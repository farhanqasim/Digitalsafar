import { Link } from 'react-router-dom';

const services = [
  { title: 'Web Development Services', desc: 'Business websites, corporate sites, landing pages, and custom web applications.', to: '/service/web-development', icon: 'flaticon-seo', iconBg: 'icon-bg-1.png' },
  { title: 'Mobile App Development', desc: 'Android, Flutter, and cross-platform apps for great user experiences.', to: '/service/android-app', icon: 'flaticon-email-marketing-1', iconBg: 'icon-bg-2.png' },
  { title: 'UI/UX Design', desc: 'User-centered design that makes your products intuitive and enjoyable.', to: '/service/ui-ux-design', icon: 'flaticon-performance', iconBg: 'icon-bg-3.png' },
  { title: 'SEO & Digital Marketing', desc: 'Search visibility, content strategy, and data-driven campaigns.', to: '/service/seo-digital-marketing', icon: 'flaticon-email-marketing', iconBg: 'icon-bg-4.png' },
  { title: 'Website Maintenance & Support', desc: 'Ongoing updates, security, backups, and support.', to: '/service/website-maintenance', icon: 'flaticon-seo', iconBg: 'icon-bg-5.png' },
];

export default function Services() {
  return (
    <>
      <section className="breadcrumb-section fix bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="page-heading">
              <ul className="breadcrumb-list wow fadeInUp" data-wow-delay=".5s">
                <li><Link to="/">Home</Link></li>
                <li><i className="fal fa-long-arrow-right"></i></li>
                <li>Our Services</li>
              </ul>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">Our Services</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="service-section-2 section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Our Services</span>
            <h2 className="char-animation">Complete Digital Services for<br /> Your Business Growth</h2>
          </div>
          <div className="row g-5">
            {services.map((s, i) => (
              <div key={s.to} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`.${(i % 4) * 2 + 2}s`}>
                <div className="service-icon-box-items-2">
                  <div className="icon">
                    <i className={s.icon}></i>
                    <div className="icon-bg"><img src={`/assets/img/service/${s.iconBg}`} alt="" /></div>
                  </div>
                  <div className="content">
                    <h3><Link to={s.to}>{s.title}</Link></h3>
                    <p>{s.desc}</p>
                    <Link to={s.to} className="link-btn">Get Started <i className="far fa-arrow-right"></i></Link>
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

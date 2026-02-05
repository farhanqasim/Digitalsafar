import { useEffect, useRef } from 'react';
import Preloader from './Preloader';
import BackToTop from './BackToTop';
import Offcanvas from './Offcanvas';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const mainJsLoaded = useRef(false);

  useEffect(() => {
    if (mainJsLoaded.current) return;
    const script = document.createElement('script');
    script.src = '/assets/js/main.js';
    script.async = false;
    document.body.appendChild(script);
    mainJsLoaded.current = true;
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <>
      <Preloader />
      <BackToTop />
      <Offcanvas />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

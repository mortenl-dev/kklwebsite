import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Focus from '@/components/Focus';
import Contact from '@/components/Contact';
import Courses from '@/components/Courses';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <hr style={{ border: 'none', borderTop: '1px solid var(--paper-mid)' }} />
        <About />
        <hr style={{ border: 'none', borderTop: '1px solid var(--paper-mid)' }} />
        <Focus />
        <hr style={{ border: 'none', borderTop: '1px solid var(--paper-mid)' }} />
        <Courses />
        <hr style={{ border: 'none', borderTop: '1px solid var(--paper-mid)' }} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

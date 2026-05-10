import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Focus from '@/components/Focus';
import Teaching from '@/components/Teaching';
import Publications from '@/components/Publications';
import Contact from '@/components/Contact';
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
        <Teaching />
        <hr style={{ border: 'none', borderTop: '1px solid var(--paper-mid)' }} />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

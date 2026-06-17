import ScrollReveal from './ScrollReveal';

const books = [
  {
    title: 'Samtalen om sex – for sundhedsprofessionelle',
    subtitle: 'Hans Reitzels Forlag, 2018',
  },
  {
    title: 'Systemische Sexualtherapie',
    subtitle: 'Carl-Auer Verlag, 2020',
  },
  {
    title: 'Kompetente par – en vejledning i par- og sexterapi',
    subtitle: 'Akademisk Forlag, 2023',
  },
];

export default function Publications() {
  return (
    <section id="publications" style={{ padding: '100px 40px', background: 'var(--paper-warm)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <ScrollReveal>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>
            Fagbøger
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '-0.01em', color: 'var(--ink)', marginBottom: '20px' }}>
            Tre fagbøger der forener forskning og klinisk praksis
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', maxWidth: '700px' }}>
            Bøgerne er en del af instituttets fundament og bruges aktivt i undervisning og faglig udvikling.
          </p>
        </ScrollReveal>

        <div style={{ marginTop: '46px', display: 'grid', gap: '20px' }}>
          {books.map((book, index) => (
            <ScrollReveal key={book.title} delay={index * 70}>
              <div style={{ padding: '26px 28px', background: 'var(--paper)', borderRadius: 'var(--r)', border: '1px solid var(--paper-mid)', display: 'grid', gap: '8px' }}>
                <p style={{ margin: 0, color: 'var(--accent)', fontSize: '14px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Bog {index + 1}
                </p>
                <p style={{ margin: 0, fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 400, color: 'var(--ink)' }}>
                  {book.title}
                </p>
                <p style={{ margin: 0, fontSize: '15px', color: 'var(--ink-soft)' }}>
                  {book.subtitle}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

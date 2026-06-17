import ScrollReveal from './ScrollReveal';

const blocks = [
  {
    title: 'Seksualpsykologisk forståelse',
    description: 'Et analytisk grundlag, der placerer seksualitet i relationelle og udviklingsmæssige sammenhænge.',
  },
  {
    title: 'Kliniske færdigheder',
    description: 'Metoder til at skabe tryghed, åbne dialog og arbejde professionelt med seksuelle problemstillinger.',
  },
  {
    title: 'Terapeutiske interventioner',
    description: 'Praktiske redskaber til at arbejde konkret med seksualitet i individuel og parterapi.',
  },
  {
    title: 'Refleksiv professionalisme',
    description: 'Træning i terapeuten egen position, normer og værdier i forhold til klinisk praksis.',
  },
];

export default function Teaching() {
  return (
    <section id="teaching" style={{ padding: '100px 40px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <ScrollReveal>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>
            Undervisning
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '-0.01em', color: 'var(--ink)', marginBottom: '20px' }}>
            Uddannelse for fagpersoner med teoretisk og klinisk forankring
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', maxWidth: '700px', marginBottom: '36px' }}>
            Målet er ikke blot at formidle viden om seksualitet, men at udvikle fagpersoner, der kan arbejde kompetent, refleksivt og etisk med seksualitet som en integreret del af menneskers liv.
          </p>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '24px' }} className="teaching-grid">
          {blocks.map((block, index) => (
            <ScrollReveal key={block.title} delay={index * 80}>
              <div style={{ padding: '28px', background: 'var(--paper-warm)', borderRadius: 'var(--r)', border: '1px solid var(--paper-mid)', minHeight: '170px' }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 400, color: 'var(--ink)', marginBottom: '16px' }}>
                  {block.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--ink-soft)' }}>
                  {block.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .teaching-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}

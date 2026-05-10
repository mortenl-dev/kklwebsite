import { useTranslations } from 'next-intl';
import ScrollReveal from './ScrollReveal';

export default function Focus() {
  const t = useTranslations('focus');
  const areas = t.raw('areas') as Array<{ num: string; title: string; body: string }>;

  return (
    <section id="focus" style={{ padding: '100px 40px', background: 'var(--paper-warm)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ScrollReveal>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>
            {t('label')}
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px,3.5vw,48px)',
            fontWeight: 300, lineHeight: 1.15, letterSpacing: '-0.01em',
            color: 'var(--ink)', marginBottom: '20px' }}
            dangerouslySetInnerHTML={{ __html: t.raw('title') }}
          />
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--ink-soft)',
            maxWidth: '600px' }}>
            {t('body')}
          </p>
        </ScrollReveal>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          gap: '24px', marginTop: '56px',
        }} className="focus-grid">
          {areas.map((area, i) => (
            <ScrollReveal key={area.num} delay={i * 80}>
              <div style={{
                background: 'var(--paper)', borderRadius: 'var(--r)',
                padding: '32px', border: '1px solid var(--paper-mid)',
                height: '100%',
              }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '48px',
                  fontWeight: 600, color: 'var(--accent-pale)',
                  lineHeight: 1, marginBottom: '16px', userSelect: 'none' }}>
                  {area.num}
                </div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '22px',
                  fontWeight: 400, color: 'var(--ink)', marginBottom: '12px' }}>
                  {area.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--ink-soft)' }}>
                  {area.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .focus-grid { grid-template-columns: 1fr !important; }
          section { padding: 64px 20px !important; }
        }
      `}</style>
    </section>
  );
}

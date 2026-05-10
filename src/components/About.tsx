import { useTranslations } from 'next-intl';
import ScrollReveal from './ScrollReveal';

export default function About() {
  const t = useTranslations('about');

  const credentials = t.raw('credentials') as Array<{
    year: string; title: string; institution: string;
  }>;

  return (
    <section id="about" style={{ padding: '100px 40px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '80px', alignItems: 'start',
        }} className="about-grid">

          {/* Left */}
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
              {t('body1')}
            </p>
            <blockquote style={{
              fontFamily: 'var(--serif)', fontSize: '28px', fontWeight: 300,
              fontStyle: 'italic', lineHeight: 1.4, color: 'var(--ink)',
              borderLeft: '2px solid var(--accent-light)', paddingLeft: '28px',
              margin: '48px 0',
            }}>
              {t('quote')}
            </blockquote>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--ink-soft)',
              maxWidth: '600px' }}>
              {t('body2')}
            </p>
          </ScrollReveal>

          {/* Right — credentials */}
          <ScrollReveal delay={100}>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>
              {t('credentialsLabel')}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {credentials.map((c) => (
                <div key={c.year} style={{
                  display: 'flex', gap: '16px', alignItems: 'flex-start',
                  padding: '20px', background: 'var(--paper-warm)',
                  borderRadius: 'var(--r)', borderLeft: '3px solid var(--accent-light)',
                }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '20px',
                    fontWeight: 600, color: 'var(--accent)', whiteSpace: 'nowrap',
                    minWidth: '50px' }}>
                    {c.year}
                  </span>
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px',
                      fontWeight: 500, color: 'var(--ink)', marginBottom: '2px' }}>
                      {c.title}
                    </strong>
                    <span style={{ fontSize: '13px', color: 'var(--ink-muted)' }}>
                      {c.institution}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

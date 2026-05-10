import { useTranslations } from 'next-intl';
import ScrollReveal from './ScrollReveal';

export default function Publications() {
  const t = useTranslations('publications');
  const pubs = t.raw('list') as Array<{
    year: string; title: string; journal: string;
  }>;

  return (
    <section id="publications" style={{ padding: '100px 40px', background: 'var(--paper-warm)' }}>
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

        <div style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {pubs.map((pub, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div style={{
                padding: '28px', background: 'var(--paper)', borderRadius: 'var(--r)',
                border: '1px solid var(--paper-mid)',
                display: 'grid', gridTemplateColumns: '60px 1fr', gap: '20px',
              }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '18px',
                  fontWeight: 600, color: 'var(--accent)', paddingTop: '2px' }}>
                  {pub.year}
                </span>
                <div>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: '18px',
                    fontWeight: 400, color: 'var(--ink)', marginBottom: '6px',
                    lineHeight: 1.3 }}>
                    {pub.title}
                  </p>
                  <p style={{ fontSize: '13px', color: 'var(--ink-muted)' }}
                    dangerouslySetInnerHTML={{ __html: pub.journal }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

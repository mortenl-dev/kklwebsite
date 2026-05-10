import { useTranslations } from 'next-intl';
import ScrollReveal from './ScrollReveal';

export default function Teaching() {
  const t = useTranslations('teaching');
  const universities = t.raw('universities') as Array<{
    abbr: string; name: string; role: string;
  }>;
  const courses = t.raw('courses') as Array<{
    tag: string; name: string; level: string;
  }>;

  return (
    <section id="teaching" style={{ padding: '100px 40px', background: 'var(--paper)' }}>
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
        </ScrollReveal>

        {/* University cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '24px', marginTop: '56px',
        }} className="teaching-grid">
          {universities.map((u, i) => (
            <ScrollReveal key={u.abbr} delay={i * 60}>
              <div style={{
                display: 'flex', gap: '20px', alignItems: 'flex-start',
                padding: '28px', border: '1px solid var(--paper-mid)',
                borderRadius: 'var(--r)', background: 'var(--paper-warm)',
              }}>
                <div style={{
                  width: '44px', height: '44px', flexShrink: 0,
                  borderRadius: 'var(--r)', background: 'var(--paper-mid)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--serif)', fontSize: '14px',
                  fontWeight: 600, color: 'var(--accent)',
                }}>
                  {u.abbr}
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '15px',
                    fontWeight: 500, color: 'var(--ink)', marginBottom: '4px' }}>
                    {u.name}
                  </strong>
                  <span style={{ fontSize: '13px', color: 'var(--ink-muted)' }}>
                    {u.role}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Course list */}
        <ScrollReveal delay={200}>
          <div style={{ marginTop: '48px' }}>
            {courses.map((c, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'baseline', gap: '16px',
                padding: '16px 0', fontSize: '15px',
                borderBottom: '1px solid var(--paper-mid)',
                borderTop: i === 0 ? '1px solid var(--paper-mid)' : undefined,
              }}>
                <span style={{
                  fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em',
                  textTransform: 'uppercase', padding: '3px 9px', borderRadius: '3px',
                  background: 'var(--accent-pale)', color: 'var(--accent)', whiteSpace: 'nowrap',
                }}>
                  {c.tag}
                </span>
                <span style={{ color: 'var(--ink)', flex: 1 }}>{c.name}</span>
                <span style={{ fontSize: '13px', color: 'var(--ink-muted)' }}>{c.level}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .teaching-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}

'use client';

import ScrollReveal from './ScrollReveal';

export default function Contact() {
  return (
    <section id="maalgruppe" style={{ padding: '100px 40px', background: 'var(--ink)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <ScrollReveal>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent-light)', marginBottom: '16px' }}>
            Målgruppe
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '-0.01em', color: 'var(--paper)', marginBottom: '20px' }}>
            Målgruppe
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'rgba(250,248,244,.75)', maxWidth: '700px', marginBottom: '28px' }}>
            Instituttets efteruddannelser henvender sig primært til:
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div style={{ display: 'grid', gap: '18px', padding: '28px', background: 'rgba(255,255,255,.06)', borderRadius: '24px', border: '1px solid rgba(255,255,255,.12)' }}>
            {['Psykologer', 'Psykoterapeuter med dokumenteret terapeutisk uddannelse', 'Andre sundhedsprofessionelle med relevant baggrund'].map((item) => (
              <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '999px', marginTop: '8px', background: 'var(--accent-light)' }} />
                <span style={{ color: 'var(--paper)', fontSize: '16px', lineHeight: 1.8 }}>{item}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

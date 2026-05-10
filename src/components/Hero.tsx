import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section style={{ padding: 0, background: 'var(--paper)' }}>
      <div style={{
        minHeight: 'calc(100vh - var(--nav-h))',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 40px',
        gap: '80px',
        alignItems: 'center',
      }} className="hero-grid">
        {/* Text */}
        <div className="fade-up">
          <p style={{
            fontFamily: 'var(--sans)', fontSize: '12px', fontWeight: 500,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--accent)', marginBottom: '20px',
          }}>
            {t('eyebrow')}
          </p>
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(42px, 5vw, 68px)',
            fontWeight: 300, lineHeight: 1.1,
            letterSpacing: '-0.01em', color: 'var(--ink)', marginBottom: '28px',
          }}
            dangerouslySetInnerHTML={{ __html: t.raw('title') }}
          />
          <p style={{
            fontSize: '16px', lineHeight: 1.8, color: 'var(--ink-soft)',
            maxWidth: '480px', marginBottom: '40px',
          }}>
            {t('description')}
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="#focus" style={{
              display: 'inline-block', padding: '14px 28px',
              background: 'var(--ink)', color: 'var(--paper)',
              borderRadius: 'var(--r)', fontSize: '13px', fontWeight: 500,
              letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none',
              transition: 'background .2s',
            }}>{t('cta1')}</a>
            <a href="#contact" style={{
              display: 'inline-block', padding: '14px 28px',
              background: 'transparent', color: 'var(--ink)',
              borderRadius: 'var(--r)', border: '1px solid var(--paper-mid)',
              fontSize: '13px', fontWeight: 500,
              letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none',
              transition: 'border-color .2s',
            }}>{t('cta2')}</a>
          </div>
        </div>

        {/* Photo column */}
        <div className="fade-up-delay hero-media" style={{ position: 'relative', width: '100%', aspectRatio: '4/5' }}>
          <Image src="/photo.jpg" alt="Karina Kehlet Lins" fill style={{ objectFit: 'cover', borderRadius: '4px 40px 4px 40px' }} />

          {/* Badge */}
          <div style={{
            position: 'absolute', bottom: '32px', left: '-24px',
            background: 'var(--paper)', border: '1px solid var(--paper-mid)',
            borderRadius: '12px', padding: '16px 20px',
            boxShadow: '0 8px 32px rgba(26,23,20,.08)',
            display: 'flex', gap: '12px', alignItems: 'center',
          }}>
            <span style={{
              fontFamily: 'var(--serif)', fontSize: '36px',
              fontWeight: 600, color: 'var(--ink)', lineHeight: 1,
            }}>15+</span>
            <span style={{ fontSize: '12px', color: 'var(--ink-soft)', lineHeight: 1.4 }}>
              {t('badgeLabel')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

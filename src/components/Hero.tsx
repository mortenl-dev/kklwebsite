import Image from 'next/image';

export default function Hero() {
  return (
    <section style={{ padding: 0, background: 'var(--paper)' }}>
      <div style={{
        minHeight: 'calc(100vh - var(--nav-h))',
        display: 'grid',
        gridTemplateColumns: '1.8fr 1fr',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 40px',
        gap: '80px',
        alignItems: 'center',
      }} className="hero-grid">
        <div className="fade-up">
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '24px' }}>
            <div style={{
              width: '68px', height: '68px', borderRadius: '18px',
              background: 'var(--accent-pale)', color: 'var(--accent)',
              display: 'grid', placeItems: 'center', fontWeight: 700,
              fontFamily: 'var(--serif)', letterSpacing: '0.1em',
              position: 'relative', overflow: 'hidden',
            }}>
              <Image src="/textless.png" alt="Institut for Seksualpsykologi logo" fill style={{ objectFit: 'contain' }} />
            </div>
            <div>
              <p style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '8px' }}>
                Institut for Seksualpsykologi
              </p>
              <p style={{ fontSize: '15px', color: 'var(--ink-soft)', maxWidth: '560px' }}>
                Efteruddannelse, supervision og vidensformidling
              </p>
            </div>
          </div>
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(42px, 5vw, 68px)',
            fontWeight: 300, lineHeight: 1.05,
            letterSpacing: '-0.01em', color: 'var(--ink)', marginBottom: '28px',
          }}>
            Institut for Seksualpsykologi
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', maxWidth: '560px', marginBottom: '24px' }}>
            Vi tilbyder forskningsinformeret efteruddannelse, supervision og faglig udvikling for
            psykologer, psykoterapeuter og andre sundhedsprofessionelle med relevant baggrund.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', maxWidth: '560px', marginBottom: '24px' }}>
            Instituttet er grundlagt med ønsket om at styrke den seksualpsykologiske faglighed og
            bidrage til, at flere fagpersoner opnår kompetencer til at arbejde kvalificeret med
            seksuelle problemstillinger i terapeutisk praksis.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', maxWidth: '560px', marginBottom: '40px' }}>
            Vores undervisning tager udgangspunkt i psykologisk teori, klinisk erfaring og aktuel
            forskning inden for seksualitet, relationer og psykoterapi.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="#about" style={{
              display: 'inline-block', padding: '14px 26px',
              background: 'var(--ink)', color: 'var(--paper)',
              borderRadius: 'var(--r)', fontSize: '13px', fontWeight: 500,
              letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none',
            }}>
              Om Instituttet
            </a>
            <a href="#education" style={{
              display: 'inline-block', padding: '14px 26px',
              background: 'transparent', color: 'var(--ink)',
              borderRadius: 'var(--r)', border: '1px solid var(--paper-mid)',
              fontSize: '13px', fontWeight: 500,
              letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none',
            }}>
              Uddannelse
            </a>
          </div>
        </div>

        <div className="fade-up-delay hero-media" style={{ position: 'relative', width: '100%', aspectRatio: '4/5' }}>
          <Image src="/photo.jpg" alt="Institut for Seksualpsykologi" fill style={{ objectFit: 'cover', borderRadius: '4px 40px 4px 40px' }} />
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px 80px' }}>
        <div className="fade-up" style={{ display: 'grid', gap: '24px', maxWidth: '700px' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 300, lineHeight: 1.1, color: 'var(--ink)' }}>
              Sexologisk rådgivning og sexterapi er ikke det samme
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--ink-soft)', marginTop: '16px' }}>
              Mange uddannelser inden for sexologi fokuserer primært på rådgivning, vejledning og formidling af viden om seksualitet. Disse kompetencer er værdifulde, men adskiller sig fra det psykoterapeutiske arbejde med seksuelle vanskeligheder.
            </p>
          </div>

          

          

          <div style={{ padding: '26px', background: 'var(--paper-warm)', borderRadius: '24px', border: '1px solid var(--paper-mid)' }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 500, color: 'var(--ink)', marginBottom: '16px' }}>
              Undervisning og supervision
            </h3>
            <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'grid', gap: '12px', marginBottom: '16px' }}>
              {['Efteruddannelse i seksualpsykologi og sexterapi', 'Faglige kurser og workshops', 'Supervision af terapeuter og behandlere', 'Vidensformidling og foredrag'].map((item) => (
                <li key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '999px', marginTop: '8px', background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--ink-soft)', fontSize: '16px' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', margin: 0 }}>
              Undervisningen og supervisionen varetages af autoriserede psykologer med specialiseret viden inden for seksualitet, parterapi og psykoterapi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

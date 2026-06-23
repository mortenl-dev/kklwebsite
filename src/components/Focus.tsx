import ScrollReveal from './ScrollReveal';

const pillars = [
  {
    title: 'Seksualpsykologisk forståelse',
    text: 'Hvordan forstås seksualitet psykologisk, relationelt og udviklingsmæssigt?',
  },
  {
    title: 'Kliniske færdigheder',
    text: 'Hvordan skaber man tryghed og taler professionelt om seksualitet?',
  },
  {
    title: 'Terapeutiske interventioner',
    text: 'Hvordan arbejder man konkret med seksualitet i terapi?',
  },
  {
    title: 'Terapeutens egen position (Sexual Self-Awareness)',
    text: 'Hvordan påvirker vores egne normer, værdier og erfaringer det kliniske arbejde?',
  },
];

const themes = [
  'Seksuelle dysfunktioner',
  'Lystforskelle i parforhold',
  'Utroskab og tillidsbrud',
  'Køn, identitet og seksualitet',
  'Seksuel mangfoldighed',
  'Traumeforståelse og seksualitet',
];

export default function Focus() {
  return (
    <section id="education" style={{ padding: '100px 40px', background: 'var(--paper-warm)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <ScrollReveal>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>
            Uddannelse
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '-0.01em', color: 'var(--ink)', marginBottom: '20px' }}>
            Uddannelsesstruktur
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', maxWidth: '700px', marginBottom: '24px' }}>
            Institut for Seksualpsykologi tilbyder en modulopbygget efterkvalificering, hvor
            fagpersoner kan skræddersy deres eget forløb i overenstemmelse med deres kliniske
            arbejde.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', maxWidth: '700px', marginBottom: '24px' }}>
            Uddannelsesblokkene består af både grundlæggende og videregående moduler, som kan
            tages enkeltvis eller som led i et samlet forløb. På hvert modul er der max 12 deltagere for
            at sikre aktiv deltagelse, refleksion samt tæt kontakt til underviserne.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', maxWidth: '700px', marginBottom: '32px' }}>
            Institut tilbyder:
          </p>
          <div style={{ padding: '12px 0 24px', maxWidth: '700px' }}>
            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'grid', gap: '8px' }}>
              {['Faglige kurser og workshops', 'Supervision af terapeuter og behandlere', 'Vidensformidling og foredrag'].map((item) => (
                <li key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '999px', marginTop: '8px', background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--ink-soft)', fontSize: '16px' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div style={{ padding: '26px', background: 'var(--paper)', borderRadius: '24px', border: '1px solid var(--paper-mid)', marginBottom: '32px' }}>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--ink-soft)', marginBottom: '12px' }}>
              Udgangspunktet er, at kompetent arbejde med seksualitet kræver mere end sexologisk viden. Det kræver psykologisk forståelse, terapeutiske færdigheder og personlig refleksion.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--ink-soft)' }}>
              Seksualitet forstås i en relationel og psykologisk kontekst, og uddannelsen bevæger sig fra grundlæggende færdigheder mod mere avancerede interventioner.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '24px' }} className="education-grid">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} delay={index * 80}>
              <div style={{ padding: '28px', background: 'var(--paper)', borderRadius: 'var(--r)', border: '1px solid var(--paper-mid)', minHeight: '170px' }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 500, color: 'var(--ink)', marginBottom: '14px' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--ink-soft)' }}>
                  {pillar.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div style={{ marginTop: '40px', display: 'grid', gap: '22px' }}>
            <div style={{ padding: '28px', background: 'var(--paper)', borderRadius: '24px', border: '1px solid var(--paper-mid)' }}>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 500, color: 'var(--ink)', marginBottom: '16px' }}>
                  De 4 søjler
                </h3>
              <div style={{ display: 'grid', gap: '16px' }}>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--ink-soft)', margin: 0 }}>
                  Uddannelsen hviler på fire faglige søjler, der tilsammen dækker viden, metode, handling og terapeutens egen position.
                </p>
                <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'grid', gap: '10px' }}>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '999px', background: 'var(--accent)', marginTop: '8px' }} />
                    <span style={{ color: 'var(--ink-soft)' }}><strong>Seksualpsykologisk forståelse</strong> – Hvordan forstås seksualitet psykologisk, relationelt og udviklingsmæssigt?</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '999px', background: 'var(--accent)', marginTop: '8px' }} />
                    <span style={{ color: 'var(--ink-soft)' }}><strong>Kliniske færdigheder</strong> – Hvordan skaber man tryghed og taler professionelt om seksualitet?</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '999px', background: 'var(--accent)', marginTop: '8px' }} />
                    <span style={{ color: 'var(--ink-soft)' }}><strong>Terapeutiske interventioner</strong> – Hvordan arbejder man konkret med seksualitet i terapi?</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '999px', background: 'var(--accent)', marginTop: '8px' }} />
                    <span style={{ color: 'var(--ink-soft)' }}><strong>Terapeutens egen position (Sexual Self-Awareness)</strong> – Hvordan påvirker vores egne normer, værdier og erfaringer det kliniske arbejde?</span>
                  </li>
                </ul>
              </div>
            </div>

            <div style={{ padding: '28px', background: 'var(--paper)', borderRadius: '24px', border: '1px solid var(--paper-mid)' }}>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 500, color: 'var(--ink)', marginBottom: '16px' }}>
                Uddannelsens forløb
              </h3>
              <div style={{ display: 'grid', gap: '18px' }}>
                <div>
                  <strong>Grundforløb</strong>
                  <ul style={{ marginTop: '10px', paddingLeft: '20px', color: 'var(--ink-soft)', lineHeight: 1.8 }}>
                    <li>Basis Sexologi</li>
                    <li>Basis Parterapi</li>
                    <li>SSA I – egen seksualitetsforståelse</li>
                  </ul>
                </div>
                <div>
                  <strong>Klinisk forløb</strong>
                  <ul style={{ marginTop: '10px', paddingLeft: '20px', color: 'var(--ink-soft)', lineHeight: 1.8 }}>
                    <li>Den seksualpsykologiske samtale</li>
                    <li>Udredning og hypotesedannelse</li>
                    <li>Interventioner</li>
                    <li>SSA II – terapeuten i rummet</li>
                  </ul>
                </div>
                <div>
                  <strong>Avanceret forløb</strong>
                  <ul style={{ marginTop: '10px', paddingLeft: '20px', color: 'var(--ink-soft)', lineHeight: 1.8 }}>
                    <li>Komplekse sager</li>
                    <li>Integration af par- og sexterapi</li>
                    <li>SSA III – avanceret klinisk refleksion</li>
                    <li>Supervision</li>
                  </ul>
                </div>
                <div>
                  <strong>Certificering</strong>
                  <ul style={{ marginTop: '10px', paddingLeft: '20px', color: 'var(--ink-soft)', lineHeight: 1.8 }}>
                    <li>Gennemførte moduler</li>
                    <li>Supervision</li>
                    <li>Dokumenteret klinisk erfaring</li>
                    <li>Afsluttende kompetencevurdering</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ padding: '28px', background: 'var(--paper)', borderRadius: '24px', border: '1px solid var(--paper-mid)' }}>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 500, color: 'var(--ink)', marginBottom: '16px' }}>
                Kliniske temaer
              </h3>
              <ul style={{ marginTop: '10px', paddingLeft: '20px', color: 'var(--ink-soft)', lineHeight: 1.8, display: 'grid', gap: '10px' }}>
                {themes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .education-grid { grid-template-columns: 1fr !important; }
          section { padding: 64px 20px !important; }
        }
      `}</style>
    </section>
  );
}

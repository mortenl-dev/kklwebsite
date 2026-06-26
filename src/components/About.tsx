import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 40px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <ScrollReveal>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>
           
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '-0.01em', color: 'var(--ink)', marginBottom: '24px' }}>
             Om Instituttet
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', marginBottom: '24px' }}>
            Institut for Seksualpsykologi er grundlagt i 2026 af Karina Kehlet Lins, autoriseret psykolog,
            systemisk parterapeut samt klinisk sexolog.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', marginBottom: '24px' }}>
            Instituttet er skabt ud fra en overbevisning om at seksualitet ikke kan forstås isoleret – men altid må
            ses i sammenhæng med tilknytning, relation, følelsesliv og livshistorie. Det er denne forståelse der
            ligger til grund for al undervisning på instituttet, og som adskiller os fra mere traditionelle
            sexologiske uddannelser.
          </p>
          <div style={{ display: 'grid', gap: '16px', padding: '24px', background: 'var(--paper-warm)', borderRadius: '24px', border: '1px solid var(--paper-mid)' }}>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--ink)' }}>
              Undervisningen er forskningsinformeret og klinisk forankret. Den bygger på viden og metoder
              udviklet af Karina Kehlet igennem 25 års klinisk praksis, hendes undervisning ved Københavns
              Universitet, Syddansk Universitet samt andre steder i Europa – og de tre fagbøger:
            </p>
            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'grid', gap: '12px' }}>
              {[
                'Samtalen om sex – for sundhedsprofessionelle (Hans Reitzels Forlag, 2018)',
                'Systemische Sexualtherapie (Carl-Auer Verlag, 2020)',
                'Kompetente par – en vejledning i par- og sexterapi (Akademisk Forlag, 2023)'
              ].map((item) => (
                <li key={item} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <span style={{ minWidth: '10px', height: '10px', marginTop: '8px', borderRadius: '999px', background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--ink-soft)', fontSize: '16px' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', marginTop: '24px', marginBottom: '40px' }}>
            Instituttet holder til i egne lokaler på Amager, hvor undervisning, gruppeøvelser og klinisk praksis foregår under samme tag – ikke som et kursuscenter, men som et levende fagligt miljø.
          </p>

          <div style={{ padding: '28px', background: 'var(--paper-warm)', borderRadius: '24px', border: '1px solid var(--paper-mid)' }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 500, color: 'var(--ink)', marginBottom: '18px' }}>
              Instituttets faglige grundlag
            </h3>
            <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', marginBottom: '20px' }}>
              Institut for Seksualpsykologi er grundlagt på den overbevisning, at kompetent arbejde med seksualitet kræver psykologisk forståelse, terapeutiske færdigheder og personlig refleksion.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', marginBottom: '20px' }}>
              Vi forstår seksualitet som en integreret del af menneskers psykiske og relationelle liv. Seksuelle udfordringer opstår sjældent isoleret, men er tæt forbundet med relationer, tilknytning, identitet, livshistorie og kulturelle normer.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', marginBottom: '24px' }}>
              Målet er at uddanne fagpersoner, der kan møde seksuelle problemstillinger med både faglig præcision, terapeutisk dybde og respekt for menneskelig mangfoldighed.
            </p>
            <div style={{ display: 'grid', gap: '16px' }}>
              {['Seksualpsykologisk forståelse', 'Kliniske færdigheder', 'Terapeutiske interventioner', 'Sexual Self-Awareness (SSA) – terapeutens egen position'].map((point) => (
                <div key={point} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '999px', marginTop: '8px', background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--ink-soft)', fontSize: '16px', lineHeight: 1.8 }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', marginTop: '24px' }}>
              Målet er ikke blot at formidle viden om seksualitet, men at udvikle fagpersoner, der kan arbejde kompetent, refleksivt og etisk med seksualitet som en integreret del af menneskers liv.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

import ScrollReveal from './ScrollReveal';

export default function Courses() {
  return (
    <section id="courses" style={{ padding: '100px 40px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <ScrollReveal>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>
            Kurser
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 300, lineHeight: 1.1, color: 'var(--ink)', marginBottom: '20px' }}>
            Sexologi i klinisk praksis (3-dages modul)
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', marginBottom: '16px' }}>
            Når seksualitet fylder i samtalerummet
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', marginBottom: '16px' }}>
            Seksualitet er en grundlæggende del af menneskers trivsel, relationer og psykiske liv –
            men er ofte et overset tema i sundhedsvæsenet. Måske genkender du nogle af disse
            situationer:
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'grid', gap: '8px', marginBottom: '16px' }}>
            {[
              'En klient fortæller om problemer med lyst, intimitet eller relationer.',
              'Et par oplever udfordringer i deres seksuelle samliv.',
              'Du bliver i tvivl om, hvordan du spørger ind til seksualitet uden at overskride grænser.',
              'Du mærker, at seksualitet spiller en rolle i problemstillingen, men mangler en faglig ramme at arbejde ud fra.'
            ].map((item) => (
              <li key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '999px', marginTop: '8px', background: 'var(--accent)' }} />
                <span style={{ color: 'var(--ink-soft)', fontSize: '16px' }}>{item}</span>
              </li>
            ))}
          </ul>

          <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', marginBottom: '16px' }}>
            Dette 3-dages modul giver dig et fagligt fundament og konkrete redskaber til at
            integrere seksualitet i dit arbejde og således styrke dit faglige virke.
          </p>

          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 500, color: 'var(--ink)', marginBottom: '12px' }}>
            Målgruppe
          </h3>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', marginBottom: '16px' }}>
            Psykologer, psykoterapeuter og andre fagpersoner, der arbejder med menneskers psykiske,
            relationelle og seksuelle trivsel.
          </p>

          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 500, color: 'var(--ink)', marginBottom: '12px' }}>
            Indhold
          </h3>
          <p style={{ fontSize: '17px', color: 'var(--ink-soft)', marginBottom: '12px' }}>
            Følgende spørgsmål vil blive diskuteret:
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'grid', gap: '8px', marginBottom: '16px' }}>
            {[
              'Hvorfor er det vigtigt, at sundhedsprofessionelle inddrager seksualitet som et emne i deres kliniske hverdag?',
              'Hvordan åbner man samtaler om seksualitet på en naturlig måde?',
              'Hvilke modeller findes for at kortlægge den menneskelige seksuelle respons?',
              'Hvilke seksuelle udfordringer samt diagnoser findes?'
            ].map((item) => (
              <li key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '999px', marginTop: '8px', background: 'var(--accent)' }} />
                <span style={{ color: 'var(--ink-soft)', fontSize: '16px' }}>{item}</span>
              </li>
            ))}
          </ul>

          <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', marginBottom: '16px' }}>
            Modulet veksler mellem teori, casearbejde og øvelser, således at deltagerne opnår
            konkrete færdigheder, der kan omsættes i praksis.
          </p>

          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 500, color: 'var(--ink)', marginBottom: '12px' }}>
            Praktiske oplysninger
          </h3>
          <div style={{ display: 'grid', gap: '8px', color: 'var(--ink-soft)', marginBottom: '16px' }}>
            <div>Dato: 04.-06.11.2026</div>
            <div>Tid: kl.9.30-17.00</div>
            <div>Sted: Institut for Seksualpsykologi, Eliasgade 10, 2300 København S</div>
            <div>Pris: Early Bird (t.o.m.15.09): 7.500 kr. / Ordinær pris: 8.500 kr.</div>
            <div>Kurset er momsfritaget efter gældende regler for kompetencegivende undervisning.</div>
            <div>Deltagerantal: Max. 12 deltagere</div>
            <div>Forplejning: Kaffe, te, vand & snacks</div>
            <div>Kursusbevis: Deltagere, der gennemfører modulet, modtager et kursusbevis ved modulets afslutning.</div>
          </div>

          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 500, color: 'var(--ink)', marginBottom: '12px' }}>
            Afmelding og afbestilling
          </h3>
          <div style={{ color: 'var(--ink-soft)', marginBottom: '16px' }}>
            <p style={{ margin: 0 }}>- Ved afmelding senest 30 dage før kursusstart refunderes kursusgebyret fratrukket et administrationsgebyr på 500 kr.</p>
            <p style={{ margin: 0 }}>- Ved afmelding mellem 14 og 30 dage før kursusstart refunderes 50 % af kursusgebyret.</p>
            <p style={{ margin: 0 }}>- Ved afmelding mindre end 14 dage før kursusstart refunderes kursusgebyret ikke.</p>
            <p style={{ marginTop: 8 }}>Deltageren er velkommen til at overdrage sin plads til en anden person efter aftale med Institut for Seksualpsykologi.</p>
            <p style={{ marginTop: 8 }}>Hvis kurset aflyses fra arrangørens side, refunderes det fulde kursusgebyr. Institut for Seksualpsykologi kan ikke holdes ansvarligt for eventuelle udgifter til transport, overnatning eller andre følgeomkostninger.</p>
          </div>

          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 500, color: 'var(--ink)', marginBottom: '12px' }}>
            Om underviseren
          </h3>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '16px' }}>
            Karina Kehlet Lins (hun/hende) er psykolog, systemisk psykoterapeut og klinisk
            sexolog med mere end 20 års erfaring inden for terapi, supervision og undervisning.
            Hun er forfatter til “Samtalen om sex” og “Kompetente par” og underviser i sexologi
            ved Københavns Universitet samt andre europæiske universiteter.
          </p>

          <div style={{ marginTop: '18px' }}>
            <a href="#" style={{ display: 'inline-block', padding: '12px 20px', background: 'var(--ink)', color: 'var(--paper)', borderRadius: '8px', textDecoration: 'none' }}>TILMELDING</a>
          </div>

          <div style={{ marginTop: '60px' }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '24px', fontWeight: 300, color: 'var(--ink)', marginBottom: '18px' }}>
              Faglig Runde
            </h3>
            <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', marginBottom: '24px' }}>
              En eftermiddagsrække fra Institut for Seksualpsykologi.
              Fagligt Indblik er en række mindre arrangementer for fagpersoner der ønsker at udforske
              temaer inden for seksualitet, relationer og menneskelig mangfoldighed. Arrangementerne
              kombinerer faglige oplæg og dialog i en gruppe på max 15 deltagere for at sikre aktiv
              deltagelse og fordybelse.
            </p>

            <div style={{ display: 'grid', gap: '32px' }}>
              <div style={{ padding: '28px', background: 'var(--paper-warm)', borderRadius: '24px', border: '1px solid var(--paper-mid)' }}>
                <h4 style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 500, color: 'var(--ink)', marginBottom: '14px' }}>
                  Faglig Runde: Samtalen om sex
                </h4>
                <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', marginBottom: '16px' }}>
                  – hvordan taler vi professionelt om seksualitet med vores klienter?
                </p>
                <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', marginBottom: '16px' }}>
                  Seksualitet er en central del af menneskers liv – og alligevel synes mange terapeuter at
                  det er svært at tale om. Men klienter er både taknemmelige og lettede hvis man som
                  professionel tør sætte emnet på dagsordenen, idet man viser at det er et emne der gerne
                  må tages alvorligt. Samtidigt ved man fra forskningen, at samtaler om klienternes
                  seksualitet er med til at styrke den terapeutiske alliance.
                </p>
                <p style={{ fontSize: '17px', color: 'var(--ink-soft)', marginBottom: '12px' }}>
                  På eftermiddagen arbejder vi med:
                </p>
                <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'grid', gap: '8px', marginBottom: '16px' }}>
                  {[
                    'Hvordan man åbner for samtalen om sex på en naturlig og professionel måde',
                    'Terapeutens egen position',
                    'Hvad der gør samtalen om seksualitet svær – og hvad der gør den god'
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ width: '10px', height: '10px', borderRadius: '999px', marginTop: '8px', background: 'var(--accent)' }} />
                      <span style={{ color: 'var(--ink-soft)', fontSize: '16px' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'grid', gap: '6px', color: 'var(--ink-soft)', marginBottom: '16px' }}>
                  <div><strong>Dato:</strong> 26.08.2026</div>
                  <div><strong>Tid:</strong> 15.00–17.30</div>
                  <div><strong>Sted:</strong> Institut for Seksualpsykologi, Eliasgade 10, 2300 København</div>
                  <div><strong>Deltagere:</strong> Max 15</div>
                  <div><strong>Pris:</strong> 1.800 kr.</div>
                  <div>Momsfritaget efter gældende regler for kompetencegivende undervisning.</div>
                </div>
                <div>
                  <a href="#" style={{ display: 'inline-block', padding: '12px 20px', background: 'var(--ink)', color: 'var(--paper)', borderRadius: '8px', textDecoration: 'none' }}>TILMELDING</a>
                </div>
              </div>

              <div style={{ padding: '28px', background: 'var(--paper-warm)', borderRadius: '24px', border: '1px solid var(--paper-mid)' }}>
                <h4 style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 500, color: 'var(--ink)', marginBottom: '14px' }}>
                  Faglig Runde: Vi har (ikke) lyst
                </h4>
                <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', marginBottom: '16px' }}>
                  – hvorfor lever myten videre om at kvinder har mindre sexlyst?
                </p>
                <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--ink-soft)', marginBottom: '16px' }}>
                  Manglende lyst er en af de mest almindelige seksuelle problemstillinger – uanset køn.
                  Alligevel lever forestillingen om, at kvinder naturligt har mindre lyst til sex, stadig i bedste
                  velgående.
                </p>
                <p style={{ fontSize: '17px', color: 'var(--ink-soft)', marginBottom: '12px' }}>
                  På denne eftermiddag undersøger vi, hvad forskningen fortæller os om seksuel lyst, og
                  hvordan lystproblemer kan forstås og arbejdes med i et relationelt og terapeutisk perspektiv.
                </p>
                <p style={{ fontSize: '17px', color: 'var(--ink-soft)', marginBottom: '12px' }}>
                  På eftermiddagen arbejder vi med:
                </p>
                <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'grid', gap: '8px', marginBottom: '16px' }}>
                  {[
                    'Hvordan du kan styrke din faglige tryghed i samtaler om seksualitet og lyst',
                    'Hvordan lav lyst kan forstås ud fra et relationelt og sexologisk perspektiv',
                    'Eksempler på terapeutiske redskaber og interventioner til arbejdet med lyst'
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ width: '10px', height: '10px', borderRadius: '999px', marginTop: '8px', background: 'var(--accent)' }} />
                      <span style={{ color: 'var(--ink-soft)', fontSize: '16px' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'grid', gap: '6px', color: 'var(--ink-soft)', marginBottom: '16px' }}>
                  <div><strong>Dato:</strong> 23.09.2026</div>
                  <div><strong>Tid:</strong> 15.00–17.30</div>
                  <div><strong>Sted:</strong> Institut for Seksualpsykologi, Eliasgade 10, 2300 København</div>
                  <div><strong>Deltagere:</strong> Max 15</div>
                  <div><strong>Pris:</strong> 1.800 kr.</div>
                  <div>Momsfritaget efter gældende regler for kompetencegivende undervisning.</div>
                </div>
                <div>
                  <a href="#" style={{ display: 'inline-block', padding: '12px 20px', background: 'var(--ink)', color: 'var(--paper)', borderRadius: '8px', textDecoration: 'none' }}>TILMELDING</a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

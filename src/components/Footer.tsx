export default function Footer() {
  return (
    <footer style={{
      background: '#111', padding: '40px',
      textAlign: 'center', fontSize: '14px', color: 'rgba(250,248,244,.75)',
      lineHeight: 1.8,
    }}>
      <p style={{ marginBottom: '10px', fontWeight: 600 }}>Institut for Seksualpsykologi</p>
      <p>Lokaler på Amager</p>
      <p>Stiftet af Karina Kehlet Lins – autoriseret psykolog, systemisk parterapeut, klinisk sexolog</p>
      <p style={{ opacity: 0.7 }}>[TODO: adresse, e-mail, telefon]</p>
    </footer>
  );
}

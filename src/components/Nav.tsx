'use client';

import Image from 'next/image';

export default function Nav() {
  const navStyle: React.CSSProperties = {
    position: 'sticky', top: 0, zIndex: 100, height: 'var(--nav-h)',
    background: 'rgba(250,248,244,0.92)', backdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--paper-mid)',
    display: 'flex', alignItems: 'center', padding: '0 40px', gap: '24px',
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex', alignItems: 'center', gap: '14px', flex: 1,
  };

  const logoMark: React.CSSProperties = {
    width: '50px', height: '50px', borderRadius: '18px',
    background: 'var(--accent-pale)', color: 'var(--accent)',
    display: 'grid', placeItems: 'center', fontWeight: 700,
    fontFamily: 'var(--serif)', letterSpacing: '0.08em',
  };

  const linkStyle: React.CSSProperties = {
    fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em',
    textTransform: 'uppercase', color: 'var(--ink-soft)', textDecoration: 'none',
  };

  const links = [
    { label: 'Om Instituttet', href: '#about' },
    { label: 'Uddannelse', href: '#education' },
    { label: 'Kurser', href: '#courses' },
    { label: 'Målgruppe', href: '#maalgruppe' },
  ];

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        <div style={{ ...logoMark, position: 'relative', overflow: 'hidden' }}>
          <Image src="/textless.png" alt="Institut for Seksualpsykologi logo" fill style={{ objectFit: 'contain' }} />
        </div>
        <div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '18px', fontWeight: 600, color: 'var(--ink)' }}>
            Institut for Seksualpsykologi
          </div>
        </div>
      </div>

      <ul style={{ display: 'flex', gap: '22px', listStyle: 'none', margin: 0, padding: 0 }} className="nav-links-desktop">
        {links.map((item) => (
          <li key={item.href}>
            <a href={item.href} style={linkStyle}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

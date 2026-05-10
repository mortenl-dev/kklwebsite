'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { locales, type Locale } from '@/i18n';

export default function Nav() {
  const t = useTranslations('nav');
  const pathname = usePathname() ?? '/';
  const [open, setOpen] = useState(false);

  const segments = pathname.split('/');
  const currentLocale = (
    locales.includes(segments[1] as Locale) ? segments[1] : 'en'
  ) as Locale;

  function switchLocale(locale: Locale) {
    if (locale === currentLocale) return;
    const next = [...segments];
    if (locales.includes(next[1] as Locale)) {
      next[1] = locale;
    } else {
      next.splice(1, 0, locale);
    }
    const target = next.join('/') || '/';
    window.location.href = target;
  }

  const navStyle: React.CSSProperties = {
    position: 'sticky', top: 0, zIndex: 100, height: 'var(--nav-h)',
    background: 'rgba(250,248,244,0.92)', backdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--paper-mid)',
    display: 'flex', alignItems: 'center', padding: '0 40px', gap: '32px',
  };

  const logoStyle: React.CSSProperties = {
    fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 600,
    color: 'var(--ink)', textDecoration: 'none', letterSpacing: '-0.01em', flex: 1,
  };

  const linkStyle: React.CSSProperties = {
    fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em',
    textTransform: 'uppercase', color: 'var(--ink-soft)', textDecoration: 'none',
  };

  const burgerLine: React.CSSProperties = {
    display: 'block', width: '22px', height: '2px',
    background: 'var(--ink)', margin: '5px 0',
  };

  return (
    <nav style={navStyle}>
      <a href="#" style={logoStyle}>
        Karina Kehlet <span style={{ color: 'var(--accent)' }}>Lins</span>
      </a>

      <ul style={{ display: 'flex', gap: '32px', listStyle: 'none' }} className="nav-links-desktop">
        {(['about', 'focus', 'teaching', 'publications', 'contact'] as const).map((key) => (
          <li key={key} style={{ display: open ? 'none' : undefined }}>
            <a href={'#' + key} onClick={() => setOpen(false)} style={linkStyle}>
              {t(key)}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', gap: '4px' }}>
        {locales.map((locale) => {
          const active = currentLocale === locale;
          return (
            <button
              key={locale}
              type="button"
              onClick={() => switchLocale(locale)}
              style={{
                fontFamily: 'var(--sans)', fontSize: '12px', fontWeight: 500,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                padding: '5px 10px', borderRadius: 'var(--r)',
                border: '1px solid var(--paper-mid)', cursor: 'pointer', transition: 'all .2s',
                background: active ? 'var(--ink)' : 'transparent',
                color: active ? 'var(--paper)' : 'var(--ink-muted)',
              }}
            >
              {locale.toUpperCase()}
            </button>
          );
        })}
      </div>

      <button
        aria-label="Menu"
        onClick={() => setOpen(!open)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'none' }}
        className="nav-toggle"
      >
        <span style={burgerLine} />
        <span style={burgerLine} />
        <span style={burgerLine} />
      </button>
    </nav>
  );
}

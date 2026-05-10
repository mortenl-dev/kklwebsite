'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const t = useTranslations('contact');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire to your preferred email API (Resend, Formspree, etc.)
    console.log('Form submitted:', form);
    setSent(true);
  }

  const inputStyle: React.CSSProperties = {
    padding: '12px 16px', borderRadius: 'var(--r)',
    border: '1px solid rgba(255,255,255,.1)',
    background: 'rgba(255,255,255,.06)', color: 'var(--paper)',
    fontFamily: 'var(--sans)', fontSize: '15px',
    outline: 'none', width: '100%',
  };
  const labelStyle: React.CSSProperties = {
    fontSize: '12px', fontWeight: 500, letterSpacing: '0.06em',
    textTransform: 'uppercase', color: 'rgba(250,248,244,.5)',
    display: 'block', marginBottom: '6px',
  };

  return (
    <section id="contact" style={{ padding: '100px 40px', background: 'var(--ink)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ScrollReveal>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'var(--accent-light)', marginBottom: '16px' }}>
            {t('label')}
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px,3.5vw,48px)',
            fontWeight: 300, lineHeight: 1.15, letterSpacing: '-0.01em',
            color: 'var(--paper)', marginBottom: '20px' }}
            dangerouslySetInnerHTML={{ __html: t.raw('title') }}
          />
        </ScrollReveal>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '80px', marginTop: '56px', alignItems: 'start',
        }} className="contact-grid">

          {/* Left — info */}
          <ScrollReveal>
            <p style={{ color: 'rgba(250,248,244,.65)', fontSize: '16px', lineHeight: 1.8 }}>
              {t('body')}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
              {[
                { icon: 'mail', label: t('email'), href: `mailto:${t('email')}` },
                { icon: 'phone', label: t('phone'), href: `tel:${t('phonePlain')}` },
                { icon: 'link', label: 'ResearchGate', href: 'https://researchgate.net' },
              ].map(({ icon, label, href }) => (
                <a key={icon} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '18px 22px',
                    background: 'rgba(255,255,255,.05)',
                    border: '1px solid rgba(255,255,255,.1)',
                    borderRadius: 'var(--r)', textDecoration: 'none',
                    color: 'var(--paper)', fontSize: '14px', fontWeight: 500,
                    transition: 'background .2s',
                  }}>
                  <span style={{
                    width: '36px', height: '36px', borderRadius: '4px',
                    background: 'var(--accent)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    {icon === 'mail' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
                      </svg>
                    )}
                    {icon === 'phone' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    )}
                    {icon === 'link' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M12 8v8m-4-4h8"/>
                      </svg>
                    )}
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal delay={100}>
            {sent ? (
              <p style={{ color: 'var(--accent-light)', fontFamily: 'var(--serif)',
                fontSize: '24px', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.5 }}>
                {t('successMessage')}
              </p>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}
                  className="form-row">
                  <div>
                    <label style={labelStyle}>{t('fieldName')}</label>
                    <input type="text" required style={inputStyle} placeholder={t('placeholderName')}
                      value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}/>
                  </div>
                  <div>
                    <label style={labelStyle}>{t('fieldEmail')}</label>
                    <input type="email" required style={inputStyle} placeholder={t('placeholderEmail')}
                      value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}/>
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>{t('fieldSubject')}</label>
                  <input type="text" style={inputStyle} placeholder={t('placeholderSubject')}
                    value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}/>
                </div>
                <div>
                  <label style={labelStyle}>{t('fieldMessage')}</label>
                  <textarea required style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
                    placeholder={t('placeholderMessage')}
                    value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}/>
                </div>
                <button type="submit" style={{
                  alignSelf: 'flex-start', padding: '14px 32px',
                  background: 'var(--accent-light)', color: 'var(--ink)',
                  border: 'none', borderRadius: 'var(--r)',
                  fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: 500,
                  letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer',
                  transition: 'background .2s',
                }}>
                  {t('submit')}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

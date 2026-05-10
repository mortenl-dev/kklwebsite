import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer style={{
      background: '#111', padding: '40px',
      textAlign: 'center', fontSize: '13px', color: 'rgba(250,248,244,.3)',
    }}>
      <p style={{ marginBottom: '8px' }}>{t('copyright')}</p>
      <p>
        <a href="#" style={{ color: 'rgba(250,248,244,.5)', textDecoration: 'none' }}>
          {t('privacy')}
        </a>
        &nbsp;·&nbsp;
        <a href="#" style={{ color: 'rgba(250,248,244,.5)', textDecoration: 'none' }}>
          {t('accessibility')}
        </a>
      </p>
    </footer>
  );
}

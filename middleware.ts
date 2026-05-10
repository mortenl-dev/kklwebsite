import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
  // Disable cookie/Accept-Language detection so the URL prefix is the single
  // source of truth for which locale renders. Otherwise a stale NEXT_LOCALE
  // cookie can override the URL and pin the user to one language.
  localeDetection: false,
});

export const config = {
  matcher: ['/', '/((?!api|_next|_vercel|.*\\..*).*)'],
};

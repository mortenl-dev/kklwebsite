import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales } from './i18n';

// Locale-aware navigation primitives. Using these (instead of the ones in
// next/navigation) makes router.replace(pathname, { locale }) reliably switch
// the language while preserving the rest of the URL.
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: { children: React.ReactNode }) {
  const t = useTranslations('RootLayout');

  return (
    <BaseTemplate
      leftNav={
        <>
          <li>
            <Link
              href="/"
              className="border-none text-white hover:text-red-900"
            >
              {t('home_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/tokyo/"
              className="border-none text-white hover:text-red-900"
            >
              {t('tokyo_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/beyondTokyo/"
              className="border-none text-white hover:text-red-900"
            >
              {t('beyond_tokyo_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/travel-tips/"
              className="border-none text-white hover:text-red-900"
            >
              {t('travel_link')}
            </Link>
          </li>
          <li>
            <a
              className="border-none text-white hover:text-red-900"
              href="https://github.com/ixartz/Next-js-Boilerplate"
            >
              GitHub
            </a>
          </li>
        </>
      }
      rightNav={
        <>
          <li>
            <Link
              href="/sign-in/"
              className="border-none text-white hover:text-red-900"
            >
              {t('sign_in_link')}
            </Link>
          </li>

          <li>
            <Link
              href="/sign-up/"
              className="border-none text-white hover:text-red-900"
            >
              {t('sign_up_link')}
            </Link>
          </li>

          <li>
            <LocaleSwitcher />
          </li>
        </>
      }
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}

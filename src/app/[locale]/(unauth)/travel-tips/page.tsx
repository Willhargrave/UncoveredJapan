import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { travelTips } from '@/content/slug-content';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'TravelTips',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Portfolio = () => {
  const t = useTranslations('TravelTips');

  return (
    <>
      <h1 className="p-5 text-center text-2xl font-semibold">
        {t('presentation')}
      </h1>

      <div className="grid grid-cols-1 justify-items-start gap-2 px-10 md:grid-cols-2 xl:grid-cols-3">
        {travelTips.map((tip) => (
          <div
            key={tip.slug}
            className="relative size-80 w-full" // Set a specific height
            style={{
              backgroundImage: `url(${tip.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Link
              className="relative z-10 flex size-full items-center justify-center p-4"
              href={`/travel-tips/${tip.slug}`}
            >
              <h1 className="text-center text-4xl font-bold text-white transition duration-300 hover:text-red-500">
                {tip.name}
              </h1>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-5 text-center text-sm">
        {`${t('error_reporting_powered_by')} `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
          target="_blank"
        >
          Sentry
        </a>{' '}
        - {`${t('coverage_powered_by')} `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://about.codecov.io/codecov-free-trial/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
          target="_blank"
        >
          Codecov
        </a>
      </div>

      <a
        href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
        target="_blank"
      >
        <Image
          className="mx-auto mt-2"
          src="/assets/images/sentry-dark.png"
          alt="Sentry"
          width={130}
          height={112}
        />
      </a>
    </>
  );
};

export default Portfolio;

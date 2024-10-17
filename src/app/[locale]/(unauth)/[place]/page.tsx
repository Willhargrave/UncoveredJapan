import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import MapComponent from '@/components/MapComponent';
import TravelReccomendations from '@/components/TravelReccomendations';
import { travelContent } from '@/content/travel-content';

export async function generateMetadata({
  params,
}: {
  params: { locale: string; place: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: params.place as 'tokyo' | 'beyondTokyo',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function TravelPage({ params }: { params: { place: string } }) {
  const t = useTranslations(params.place);

  const content = travelContent[params.place as keyof typeof travelContent];
  if (!content) {
    return <div>Place not found</div>;
  }

  const locations = Object.values(content).map((item) => ({
    name: item.geoName,
    image: item.image,
    coordinantes: [0, 0],
  }));

  return (
    <>
      <p className="px-3">{t('about_paragraph')}</p>
      <div className="px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="relative flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-4">
            <TravelReccomendations content={content} />
          </div>
          <div className="h-[400px] w-full md:sticky md:top-0 md:h-screen md:w-1/2">
            <MapComponent
              locations={locations}
              className="h-full shadow-lg shadow-gray-500"
            />
          </div>
        </div>
      </div>
      <div className="mt-2 text-center text-sm">
        {`${t('translation_powered_by')} `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://l.crowdin.com/next-js"
          target="_blank"
        >
          Crowdin
        </a>
      </div>

      <a href="https://l.crowdin.com/next-js" target="_blank">
        <Image
          className="mx-auto mt-2"
          src="https://support.crowdin.com/assets/logos/core-logo/svg/crowdin-core-logo-cDark.svg"
          alt="Crowdin Translation Management System"
          width={130}
          height={112}
        />
      </a>
    </>
  );
}

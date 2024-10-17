import { getTranslations } from 'next-intl/server';

import { TravelTips } from '@/components/TravelTips';
import { fetchDataBasedOnSlug, travelTips } from '@/content/slug-content';
import { AppConfig } from '@/utils/AppConfig';

type ITravelDetailsSlug = {
  params: { slug: string; locale: string };
};

export function generateStaticParams() {
  return AppConfig.locales.flatMap((locale) =>
    travelTips.map((tip) => ({
      params: { slug: tip.slug, locale },
    })),
  );
}

export async function generateMetadata(
  props: ITravelDetailsSlug,
): Promise<{ title: string; description: string; content: string }> {
  const content = fetchDataBasedOnSlug(props.params.slug);
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'TravelSlug',
  });
  const dynamicContent = content.description;
  return {
    title: t('meta_title', { slug: props.params.slug }),
    description: t('meta_description', { slug: props.params.slug }),
    // eslint-disable-next-line object-shorthand
    content: t('content', { dynamicContent }),
  };
}

function TravelDetail({ params }: ITravelDetailsSlug) {
  const content = fetchDataBasedOnSlug(params.slug);
  if (!content) return <p>Loading....</p>;
  return <TravelTips content={content} />;
}

export default TravelDetail;

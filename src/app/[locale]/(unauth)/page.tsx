import { getTranslations } from 'next-intl/server';

import BackgroundCarousel from '@/components/BackgroundCarousel';
import WelcomeMessage from '@/components/WelcomeMessage';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <>
      <BackgroundCarousel />
      <WelcomeMessage />
    </>
  );
}

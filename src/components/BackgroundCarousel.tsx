import { useTranslations } from 'next-intl';

import { AppConfig } from '@/utils/AppConfig';

const BackgroundCarousel = () => {
  const t = useTranslations('BaseTemplate');
  const images = [
    '/assets/images/shibuya-pic.jpg',
    '/assets/images/pagoda.jpg',
    '/assets/images/nightview.jpg',
  ];

  return (
    <div className="relative flex h-screen items-center justify-center">
      {images.map((img) => {
        return (
          <div
            key={img}
            className="carousel_image"
            style={{
              backgroundImage: `url('${img}')`,
              animationDelay: `${images.indexOf(img) * 3.33}s`, // Adjust timing based on your preference
            }}
          />
        );
      })}
      <div className="absolute text-center text-white">
        <h1 className="gradient_text text-8xl">{AppConfig.name}</h1>
        <hr className="mt-2" />
        <h2 className="text-xl">{t('description')}</h2>
      </div>
    </div>
  );
};

export default BackgroundCarousel;

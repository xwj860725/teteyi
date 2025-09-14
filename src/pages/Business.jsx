import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Business() {
  const { t } = useTranslation();
  const cards = [
    {
      bgImage: '/banners/2.png',
      title: t('business.cards.0.title'),
      linkText: t('business.cards.0.linkText'),
      linkTo: '/shareholding',
    },
    {
      bgImage: '/banners/4.png',
      title: t('business.cards.1.title'),
      linkText: t('business.cards.1.linkText'),
      linkTo: '/equivalentstudies',
    },
    {
      bgImage: '/banners/8.png',
      title: t('business.cards.2.title'),
      linkText: t('business.cards.2.linkText'),
      linkTo: '/collaboration',
    },
  ];

  return (
    <div className='page-container'> 
      <Header />
      <Banner imgSrc="/banners/12.png" altText={t('business.bannerAlt')} />

      <section className="flex flex-col gap-10 py-10 px-4 page-container">
  {cards.map((item, index) => (
    <div
      key={index}
      className="w-full max-w-[1440px] mx-auto bg-gray-100 rounded-md overflow-hidden"
      style={{ aspectRatio: '6 / 2' }}
    >
      {/* Background image container + Centred text */}
      <div
        className="relative w-full h-2/3 bg-top bg-cover bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${item.bgImage})` }}
      >
        {/* The text of the h2 on the background image */}
        <h2 className="text-white text-lg md:text-3xl font-bold text-center drop-shadow-lg">
          {item.title}
        </h2>
      </div>

      {/* Link area below */}
      <div className="h-1/3 flex items-center px-6">
        <Link
          to={item.linkTo}
          className="text-red-600 text-sm md:text-xl font-medium hover:underline"
        >
          {item.linkText}
        </Link>
      </div>
    </div>
  ))}
</section>


      <Footer />
    </div>
  );
}

export default Business;

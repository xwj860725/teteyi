import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Description from '../components/Description';
import Btn from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Join() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className='page-container'>
      <Header />

      {/* Top Banner */}
      <Banner imgSrc="/banners/nature2.png" altText={t('join.bannerAlt')} className="aspect-[3/1]"/>

      {/* Main Text Introduction */}
      <Description showTitle={false}>
      <div className="leading-10 text-gray-800 text-center space-y-2">
       {t('join.description', { returnObjects: true }).map((line, idx) => (
        <div key={idx}>{line}</div>
      ))}
      </div>
      </Description>

        <Btn
          text={t('join.buttonText')}
          onClick={() => navigate('/contact')}
          fontSize="text-xl"
          bgColor="bg-red-800"
          textColor="text-white"
          hoverTextColor="text-blue-200"
          className="flex items-center mx-auto my-10 justify-center w-56 h-24 rounded-8 hover:font-bold"
        />

      {/* Footer Banner */}
         <section>
           <Banner imgSrc="/banners/1.png" altText={t('join.footerBannerAlt')} className="relative w-full aspect-[3/1]" />
         </section> 
      <Footer />
    </div>
  );
}

export default Join;

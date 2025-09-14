import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Btn from '../components/Button';
import Description from '../components/Description';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function About() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className='page-container'>
      {/* 1. Header */}
      <Header />

      {/* 2. Banner */}
      <Banner imgSrc="/banners/3.png" altText={t('home.banner.title')} className="aspect-[3/1]" />

      {/* 3. presentation of about us */}
      <section className="container mx-auto px-4 py-12">
        <Description title={t('about.aboutTitle')} className=''>
          {t('about.aboutDescription')}
        </Description>
      </section>

      {/* 4. why teteyi */}
      <section className="container mx-auto px-4 py-8">
        <Description title={t('about.whyTitle')}>
          <div className="text-center space-y-3 text-gray-700 leading-relaxed">
            <p>{t('about.why1')}</p>
            <p>{t('about.why2')}</p>
            <p>{t('about.why3')}</p>
            <p>{t('about.why4')}</p>
            <p>{t('about.why5')}</p>
            <p>{t('about.why6')}</p>
            <p>{t('about.why7')}</p>
          </div>
        </Description>
      </section>

      {/* Button */}     
      <Btn
      text={t('about.viewTeam')}
      onClick={() => navigate('/team')}
      fontSize="text-xl"
      bgColor="bg-red-800"
      textColor="text-white"
      hoverTextColor="text-blue-200"
      className="flex items-center mx-auto my-10 justify-center w-56 h-24 rounded-8 hover:font-bold"
        />

      {/* 5.  Group photo */}
      <section className="w-full px-4 mb-12">
        <img
          src="/images/yingke4.JPG"
          alt={t('about.teamPhotoAlt')}
          className="w-full rounded-lg shadow-md object-cover"
        />
      </section>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}

export default About;

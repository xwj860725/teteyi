import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <div className='page-container'>
      <Header />

      {/* Banner */}
      <Banner imgSrc="/banners/13.png" altText={t('privacy.title')} className='aspect-[3/1]'/>

      {/* Main Content */}
     <section className="container mx-auto px-4 py-8 text-gray-800 leading-relaxed text-xl">
      {t('privacy.content', { returnObjects: true }).map((line, idx) => (
        <p key={idx} className="mb-6">{line}</p>
      ))}
     </section>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy
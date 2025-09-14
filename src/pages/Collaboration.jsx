import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Collaboration() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div>
      <Header />

      <Banner imgSrc="/banners/8.png" altText={t('collaboration.bannerAlt')} className="aspect-[3/1]"
      />

      <section className="container mx-auto px-4 py-10 text-gray-800 leading-relaxed text-[17px] md:text-lg">
        <h2 className="text-2xl font-bold text-[#a80000] mb-6">{t('collaboration.sectionTitle')}</h2>
        <p className="text-xl leading-10 pb-16">
          {t('collaboration.newsContent', { returnObjects: true }).map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </p>

        <p className="text-xl font-semibold pb-2">{t('collaboration.clientsTitle')}</p>
        <p className="text-xl mb-12">{t('collaboration.clientsContent')}</p>

        <div className="text-center">
          <button
            onClick={() => navigate('/contact')}
            className="bg-red-700 text-white px-8 py-3 text-lg rounded hover:bg-red-600 transition"
          >
            {t('collaboration.button')}
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Collaboration;
